## MLP sub-update norms
A transformer model has a residual structure, therefore the final representation for a token is a sum of subupdates. How many subupdates there are depends on the granularity with which we wish to look. A first step
is to look at the output written to the residual stream from each MLP. Each layer has an MLP that will write an update to the residual stream of each token.

## Model and dataset
We use the final checkpoint of ```pythia-70m-deduped``` trained on The Pile

For dataset we use The Pile Validation set. We use the first $N=1000$ documents in the validation set for which the number of tokens in the document is at least $T=600$ tokens (wrt. to the Pythia tokenizer). These documents in the validation set seem to have no order, i.e. they are not from a specific subcorpus. We take the first $T$ tokens of these documents, leaving us with $N$ sequences of length $T$.

## Method
We use TransformerLens which has out-of-the-box support for Pythia using the ```HookedTransformer``` class. We forward each sequence through the model and use the ```ActivationCache``` to access the output of the MLP in each layer. We save all MLP outputs for all layers for all sequences.

## Result
We produce a scatter plot where each point $(x,y)$ corresponds to a sequence-layer combination. For a given sequence and layer $x$ we have $T$ activation vectors from the output of the MLP at the layer. We compute the norm of these $T$ vectors and compute the mean. This value is $y$

![alt text](https://raw.githubusercontent.com/kmrasmussen/kmrasmussen.github.io/master/share/images/norms/mlp_l2_70m.png)

![alt text](https://raw.githubusercontent.com/kmrasmussen/kmrasmussen.github.io/master/share/images/norms/mlp_l2_160m.png)
![alt text](https://raw.githubusercontent.com/kmrasmussen/kmrasmussen.github.io/master/share/images/norms/mlp_l2_410m.png)

