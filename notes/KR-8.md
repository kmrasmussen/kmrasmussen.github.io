# KR: Security in Computer Networks

## 8.1
3 goals

* We want to protect against interception/eavesdropping
* We want to be able to authenticate identities - the message should not be to/from someone else
* We want to have message integrity where the message is not changed or tampered with

Some terms:
* Confidentiality: The goal is that no one else should be able to read the message and the tool
is encryption.
* End-point authentication: The goal is to know that we are communicating with the right peer.
* Operational security: The goal is to protect the IT-infrastructure of organisations and one tool
is a firewall which regulate packets from and to the internal network and another tool is intrusion
detection which can be used to detect suspicious network activity.

## 8.2 Principles of encryption
Encryption is used for confidentiality but also other parts of network security such as authentication. Plaintext or cleartext is the term for the original message when it is not encrypted. An encryption algorithm takes two arguments, the plaintext and a key and returns a ciphertext. With symmetric key encryption, the same key is used to encrypt and decrypt the message. With public key encryption a public key is used to encrypt the message and a private key is used to decrypt it.

## 8.2.1 Symmetric key cryptography
The Ceasar cipher is an encryption algorithm which is very simple. The key k is a number and it specifies how many letters you should rotate the letter in the alphabet. The alphabet wraps around. The problem is that there are then only 25 keys and you could just try them all.

A monoalphabetic cipher uses a permutation of the alphabet so that we have a table which says which letter we should translate a given letter into. The translation table is the key and there are exponentially many but statistical analysis of language can be used to crack it. 

Polyalphabetic encryption uses multiple of the monoalphabetic ciphers together with a repeating pattern which specifies which of the tables one should use.

Some terms for types of attacks or situations:
* Ciphertext-only attacks: You just see the ciphertext and know nothing of the cleartext. Maybe statistics
can be used to attack.
* Known-plaintext: It you know some of the plaintext it can be used to diminish the possible keys.
* Chosen-plaintext: You can get the ciphertext of some cleartext that you choose. This can be used to fully
disarm fx monoalphabetic cipher if you see the ciphertext for the whole alphabet, but stronger schemes
are not necessarily broken by a chosen-plaintext situation.

### Block ciphers
Block ciphers are more modern and are used in DES, 3DES and AES.

You separate the cleartext into blocks of $k$ bits. You use a table which has mapping for each possible block, a permutation. For k bits there are $2^k$ possible blocks and so there are $(2^k)!$ different permutations/possible tables. For high $k$ it is infeasible to have so large tables as the key.

Alternative: Simple example with $k = 64$. Take 64-bit block and subdivide into 8x8 bits. Use an 8-bit table to translate each subblock. Then concatenate and scamble (deterministially, that is permute). Repeat the cycle using the result and number of times. The mentioned algorithms use more advanced versions of this idea and the keys which can be fx 54-bits are used to configure the mini-tables used to translate subblocks, and also the scrambling. Long keys are infeasible to brute-force.

### Cipher-block chaining
Since block cipher just described is deterministic, identical blocks of cleartext will become identical blocks of ciphertext. This is undesirable and randomness can be used by XORing the cleartext block with a random bit vector before encrypting and sending the random bit vector in plaintext. However, this doubles the data sent. Instead we make only a single Initialisation Vector which is XORed with the first cleartext block. All the rest a XORed with the previous ciphertext block. The receiver always has the previous ciphertext block so they can XOR back to the cleartext.

## Public key encryption
The problem with symmetric key encryption in itself, it that we need to exchange keys in secret. Diffie-Hellman key exchange was discovered in 1976 but was already discovered some years earlier by a UK agency which kept it secret.

The receiver has a public key and a possible sender encrypt their cleartext by using the public key. The receiver decrypts using the private key.

What about chosen-plaintext attack? An intruder can generate arbitrary ciphertexts. Also, with symmetric encryption there is indirect authentication since only the true sender knows the secret they, but this is not the case when the encryption key is public.

### RSA
RSA is an public key encryption algorithm. RSA is slow but it can be used to communicate just enough to exchange a session key which can be used for symmetric key encryption.

It uses modular arithmetic, especially the fact tha

$$(a \mod n)^d \mod n = a^d \mod n$$

It is outside the scope to understand the full logic behind the algorithm, one needs only here to understand some numbers: Large primes $p$ and $q$. $n = pq$, $z = (p-1)(q-1)$, $e < n$ where $e$ has not common factors with $z$. $d$ such that $ed \mod z = 1$. The public key is $(n, e)$ and the private key is $(n, d)$

With the message being understood as integer m, the encryption is $c = m^e \mod n$
and decryption $m = c^d \mod n$.

Notice that by substituing c into the the last equation $m = (m^e \mod n)^d mod n$. Using the fact described above with $a = m^e$ we get $m = m^ed \mod n$.

The reason why $d$ was constructed so that $ed \mod z = 1$ is that a theorem from number theory can be used to show that $m^ed \mod n = m^{(ed \mod z)} \mod n = m^1 \mod n$ and if we have $n > m$ then $m \mod n = m$ which is the message.

## 8.3 Message integrity
Message integrity is the same as message authentication, so authentication involves verifying that the message is from the true sender and that it has not been tampered with. An example where integrity is important is in the LD algorithm because if someone sends false information to a router it will not route correctly.

### 8.3.1 Cryptographic hash functions
Hash functions take an arbitrary message and gives a hash which is a fixed length bit vector. A cryptographic hash function is one where is infeasible to find another message which gives the same hash. This is not the case for simple checksumming functions like the ones used in IP or UDP. Examples are Md5 and SHA-1.

### 8.3.2 Message authentication code
Hash functions are used together with a shared secret authentication key s. Right now we do not care about confidentiality: When sending a message m, the sender computes the hash of (m + s) called the Message Authentication Code (MAC) and sends both the cleartext message and the MAC. The receiver computes (m + s) and checks that it is the same as the MAC which was received.

### 8.3.3 Digital signatures
We want to sign digital documents so that the signing is verifible and nonforgable. We use the private keys from private key encryption as a kind of identity. RSA and others work so that one can encrypt using the private key and decrypt using the public key even though it is used in the opposite way when dealing with confidentiality. Since this is so Bob can encrypt a document using the private key and since the public key can be used to get the original document, and he is presumably the only one with his private key, this scheme of signing is verifiable and nonforgable.

In practice the document is hashed and the hash is signed. When reciving, the public key is used to get the hash of the document. This is compared with the hash of the received document. If they match we are good.

### Public key certification
Even though digital signatures are good they do not solve the problem of authenticating that one is the actual person or organisation which one claims to be. Certification authorities verify the identifies and create cerficates which connect his semi-legal identity to his public key. If one trusts the certificate authority one can maybe also trust the person with the certificate.

## 8.3 End-point authentication
Alice wants to speak to Bob over network and authenticate herself. Trudy wants to mimick Alice some time afterwards and get Bob to think that she is Alice. Alice cannot just say "I am Alice" because Trudy could just say "I am Alice". Neither can Alice and Bob rely on using Alice's IP for authentication since Trudy might be able to send an IP datagram with Alice's IP in the source field. Neither can they just use a password since Trudy could just eavesdrop and see the password and use the same password. Neither can the password be encrypted since then Trudy could just eavesdrop and use the encrypted password. The solution offered is that Alic and Bob have a secret symmetric key which Trudy does not know. When Alice wants to log on, Bob sends a random number (a nonce) and Alice encrypts that and sends it to Bob.  By decrypting Bob knows that it must be Alice, since only she could encrypt it correctly.