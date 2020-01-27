## Designation of objects

Assume for simplicity a world with phasespace $P$ and think of it as a three-dimensional world with a time axis $t$. We want to designate an object with a function, which locates the object in space over time.

A designator function has the type $F : P \to (\mathcal{R}^3 \to [0,1])$, that is, for any state of the world at a given time $f_o(t)$ returns a probability density on $\mathcal{R}^3$ space which signifies the location of object $o$ at time $t$.

## Computing objects

An object $O$ with a functional designator computes a function $g$ in finite time $\Delta t$ if and only if there exists two sets of designator functions which designate the subobjects of the object which represent the input and the output of the function $g: A \to B$.

A finite set of $n$ input designators $i_0, i_1, ..., i_n$ points to specific areas on the object and the input $a \in A$ is

$input(t) = decode_i(i_0(t),i_1(t), ..., i_n(t))$

where $decode_i$ is the function which combine the areas and encodes it as the corresponding element from $A$.

Likewise a finite set of $m$ output designators $o_0, o_1, ..., o_m$ point to specific areas on an object and the output $b \in B$ is 

$output(t) = decode_o(o_0(t+\Delta t), o_1(t+ \delta t), ..., o_m(t + \Delta t))$.

where $decode_o$ is the function which combines all the areas and gives the corresponding element from $B$.

## An AND-gate as a computing object

$A = \{0,1\}^2$ and $B = \{0, 1\}$. Then for a specific AND-gate in my computer there exists input designators $i_0$ and $i_1$ pointing to the area at the area of the gate where electric charge represents $p$ and $q$. There is likewise $o_0$ which points to the area where the electric charge represents $p \land q$.

Our $decode_i$ has type $(F \times F) \to \{0, 1\}^2$ meaning the two areas at time $t$ is interpreted to be the truth values of $p$ and $q$. Our $decode_o$ is $F \to \{0,1\}$ meaning that the area at time $t + \Delta t$ is interpreted as the truth value of $p \land q$.

Since algorithms exist which approximate $decode_i$ and $decode_o$ we conclude that this AND-gate is a computing object, which compute $\land : \{0, 1\}^2 \to \{0,1\}$.

## Triviality of the notion of computing objects

Notice that this definition of computing object is very minimal and for any object there exist sets of I/O designator functions corresponding to some computed function. Thus we are not really interested in the set of computing objects itself, but the classes of functions which are computed.

## Brains are computing objects

Previously we talked about the different scales of description, fx the biological description of the brain state. There is a mapping from matter to the set of graphs $N$ representing the neural networks.

There are trivial sets of I/O designator functions which make a brain a computing object, but we are concerned with specific computed functions, namely the computation of approximate designator functions. This idea is quite abstract, but it is very important. That is the function which the computing object computes will be a designator function for some object in the world.

## Approximative designators

A brain does not represent the entire universe and thus it does not represent the position of objects in the same way as a simple designator function would do.

When the organism is in the environment with an object such as a rock there is a correlation between the position of different objects and the information encoded in the retina. We will say that there is a projection to denote a non-injective surjective mapping.

The retina is a part of the whole set of stimuli for the organism $S(t)$ and the neural network $N(t)$ will compute a function which designates the position of the rock, but the question is which space it is represented. The pure designator function for the rock at that time point gives a density on space according to $F : P \to (\mathcal{R}^3 \to [0,1])$.

This means that if the neural network computes the designator then we need a set of output designator functions which are equivalent to a set of nodes in the neural network which encodes this density, perhaps in the sense of sufficient statistics. It might be the case that such exist but even if they do not we can speak of approximative designators.

In machine learning a model is an approximation of some function. We judge the approximative power of the model with an objective function which is minimized. An example is the least squares loss.

If the neural network computes a function which can be compared to the true designator function at each time point $t$ in an interval of time, then we can say that it computes a function which approximates the designator function.

## Self-perspective test/decider

Consider $a, b, k \in F$ where $a$ is the brain's location density, $b$ is a second object's brain density and $k$ is the a special density which will be introduced. 

$k$ is a location density over $\mathcal{R}^3$ but not over 3-dimensional space of the world. The location at origo represents instead the location of $a$ as it approximates itself. As $a$ is a computing function, there is an encoding of the perceived distance to $b$ in relation to itself. Is all this enough to say that 

$
data \ F : \mathcal{R}^3 \to [0,1]
$

$
a, b \in F 
$

$
\mathbf{v} \in \mathcal{R}^3
$

$\exists f \in (F \to \mathcal{R}^3 \to F), s.t. f(a,\mathbf{v}) \approx b$

The self-perspective test judges the neural approximation of the location of objects with the pure designator. If given the designator densities of type $F$ for the brain $a$, there exists a mapping from the neural state to a three-dimensional vector space where vector $\mathbf{v}$ is the inferred direction and distance from $a$ and the corresponding body to the second object $b$, such that 

here is a function which will take the real position of $a$ and the vector $\mathbf{v}$ which produces a density over $\mathcal{R}^3$ which is approximate to the functional designator for $b$.



This means that even if the neural network does not have substructure which approximates $a$, its position in the larger space, we can still say that it designates its position according to its own position at origo.

The $\mathbf{v}$ is computed by the function $f : \mathcal{R}^n \to \mathcal{R}^3$, where $\mathcal{R}^n$ is the representation of the information of the retina, the codomain of $decode_i$ for the retina object.


The neural network of description of the brain of organism $O$ is a computational object. It can be v

 There is then a mapping function from the electricity in this microelectric system in these areas of space and some change in time $\Delta t$ so that there exists an algorithm which verifies that the output of the AND-gate t time $t + \delta t$ corresponds to the pure logical idea of AND of 

Meditation is a practice undertaken by a human organism $O$ which has a function designator $f$ from states of a physical world to a point or area in this space.

Attention meditation, *samadhi*, cultivates a series of experiences $E(t)$ where $t$ is the number of seconds after beginning the session. $E(t)$ is characterised by a consistency in the types of experiences from $M$.

In the experience of the meditatior there is a presence of objects. These objects are cognised by the information processing capacitites of the brain of $O$. The nose of $O$ is a real object or process for which there exists a designator function. The brain approximates the designator function.

In computer science we distinguish between the function and the algorithm. There exists many different implementations which compute the same function. The Kolgmogorov complexity of a function is the shortest encoding of an algorithm which computes the function. That is, the mapping from the set of algorithms to the set of computable functions is not injective.

Why is this relevant? We want to distinguish between the pure mathematical ontology of the functional designator apart from actualisations or approximations of these functions by patterns in matter. We can then say that the brain of $O$ contains an algorithm which approximates the functional designator of the nose.

Machine learning provides us with a theoretical tool needed to introduce the idea of approximation. Even though the neural instantation of the algorithm is not perfect, we can define an error function $L$. The error of the the algorithm as a whole can be the least squared error on the set of all possible stimuli.

There is a difference between the set of stimuli for the organism $S(t)$ and the set of experiences $E(t)$. They are correlated, however non-linearly, but they are not equivalent. $S(t)$ is defined by the full description of the charges of receptor neurons of the organism at time $t$. Depending on the degree to which there is attention to the senses there will be degrees of correlation between $S(t)$ and $E(t)$.

The neural network description of the brain is larger than and contains $S(t)$ because a graph representation of the nervous system of the organism has $S(t)$ as source nodes in a recurrent network. There is a stronger correlation between the total neural network description $N(t)$ and the experience at $t$, $E(t)$.

There exists a correlation function $a(t, k)$ which contains the correlation between $N(t)$ and $E(t + k)$ where $k$ is a time lag. That is, the correlation between the brain at $t$ and the experience some time later or before $t$.

How can this correlation be defined when $N$ and $E$ are mappings to different sets? How do we compare $B$ and $M$?

## Self-reported experience and solipsism
The organism $O$ has a conceptual representation of $M$ even if it is not described in the same way as in this text. There is a functional designation of the activity in ther nervous system of an organism in some time interval, which corresponds to the thought of being conscious of being aware.

In the neural network of $O$ there is a neural instantiation of an algorithm which approximates the functional designator of $f$. This algorithm is the formal description of what can be more loosely called self-reference. The self of $O$ is distinct from $O$ designated by its function, because the self of $O$ is is a neural approximation of the designator of function. This neural approximator is actualised in matter.

All actualised algorithms whether in biological neural networks compute the approximation in a way which is distinct from the designator. First, the cognition of an object such as a chair is an approximator adone when $S(t)$ contains input 