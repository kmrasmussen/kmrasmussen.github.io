# Linear Modelling: A Maximum Likelihood Approach
Notes for Rogers & Girolami chapter 2 by Kasper Rasmussen

We think of the set of data point as being *generated* by a probabilistic system. For a given x-value, there is a deterministic result but **noise** is added to it and this noise is modelled using probability theory. The target is thus a result of a deterministic trend and stochastic noise. If we have a linear model, then it would be as follows

$$
t_n = \mathbf{w}^T\mathbf{x} + \epsilon_n
$$

A way to think about it as follows: We have these data points and they seem to be following a straight line but no line will fit perfectly because the data points form a kind of thick line. The reason is that the points actually come from this line going through but there is some noise making the deviations. This noise is $\epsilon_n$. Each of $\epsilon_n$ is independent of the others.

We want to model the data, so perhaps we start with the assumption that the data is linear and that the noise is normally distributed. Since we are adding the noise, it makes sense that the mean of the $\epsilon_n$'s should be 0 but we want to find the variance from the data too. So the parameters we seek for the optimal model are the weights $w_i$ and the variance $\sigma^2$.

When we add the noise which is a random variable, the $t_n$ also becomes a random variable with mean at $\mathbf{w}^T\mathbf{x}$ and variance $\sigma^2$. We write $p(t_n|\mathbf{x}_n, \mathbf{w}, \sigma^2)$ and it is called
the *likelihood* of the target. Since a target is a random variable then all the targets in the training set form a random vector and this joint density is written $p(\mathbf{t}|\mathbf{X}, \mathbf{w}, \sigma^2)$. Since the epsilons were independent the targets are conditionally independent when conditioning on the trend, so

$$
p(\mathbf{t}|\mathbf{X}, \mathbf{w}, \sigma^2) = \prod p(t_n|\mathbf{x}_n, \mathbf{w}, \sigma^2)
$$

and remember that these individual densities were normal.



