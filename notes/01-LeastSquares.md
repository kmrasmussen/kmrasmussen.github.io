# Linear Modelling: A Least Squares Approach
Notes for Rogers & Girolami 2017 by Kasper Rasmussen

We have a **model** which is a function $\mathcal{R}^n \to \mathcal{R}$.
A linear model is then a linear function. We have
sample pairs $(feature, target)$ where $feature \in \mathcal{R}^n$ 
and $target \in \mathcal{R}$. They constitute our **data set**. From this
data, we want to learn the **parameters** of our model, so that we can
map any new feature (notice that it is a vector in $\mathcal{R^n}$) that
we have not seen to a given target in $\mathcal{R}$. So we are trying to
predict new things based on things we have already seen. A linear function
is $f(x_1, x_2, ..., x_n) = w_0 + w_1 x_1 + w_2 x_2 + ... + w_n x_n$ so
the parameters are the coefficients/weights $w_0, w_1, ..., w_n$.

Note that choosing to make a linear model
of a dataset is based on an assumption by the modeller that it makes sense to use linear function to describe the structure of the data.

## What is a good model?

How good a model is could be defined in different ways. Least squares is one approach. When we have a linear model of the data, we get a line, plane or hyperplane that we want to approximate the data well, you have definitely seen such a line being fit to some points before. The line does not fit perfectly to the points. The line gives you the predicted target for the feature. 

Say we have a data point $(x_1, y_1)$. Then our prediction of the y-value at
$x_1$ is $f(x_1)$. The distance between the prediction and the actual target is then
related to $y_1 - f(x_1)$. We of course want this to be small, because then our prediction
is closer to the actual target. In the least sqaures way of defining how good a model is,
we take the square of this distance and then the average for all the data points. If
our data set has $N$ data points $(x_i, y_i)$ then the least squares error or **loss**
is

$L = \frac{1}{N}\sum (y_i - f(x_i))^2$

And we want the parameters for the model which makes this loss as low as possible.

## Finding the weights which minimizes the loss

Calculus can be used to find minima for functions. By finding the derivative and
solving for 0 we can find maxima and minima. When our features are in $\mathcal{R}^d$
we have $d$ coefficients for the linear function, so we will have to use multivariate
calculus. Here one finds all the partial derivatives and form a vector of
these called the **gradient** $\nabla f$. The we solve the vector equation
$\nabla f(\mathbf{x}) = \mathbf{0}$ to find minima and maxima. A Hessian matrix of the second partial derivatives can be used to determine whether a point is a minima or a maxima.

## Vector and matrix notation for our data

Instead of writing our linar model function as $f(x_1, x_2, ..., x_n) = w_0 + w_1 x_1 + ..., w_n x_n$ we use **vector notation**. Notice that we multiply pair-wise and then sum - this is the same as the dot product. We only need to fix the first term $w_0$ since it is not multiplied with anything: $w_0 \cdot 1 + w_1 x_1 + ..., w_n x_n$. Now we are dealing with the dot product of the vectors $\mathbf{w} = (w_0, w_1, ... w_n)^T$
and $\mathbf{x}_n = (1, x_1, x_2, ..., x_n)^T$. We write "$^T$" because we think about the vectors as column vectors. So when you see "$^T$" you should think of row vectors.

The dot product of two vectors is the same as using matrix multiplication where the first is a $1 \times n$ row-vector and the second is a $n \times 1$ column vector. So $f(\mathbf{x}) = \mathbf{x}^T \mathbf{w}$. 

This is much more concise, but we can go further and define the *data matrix* $\mathbf{X}$. Since matrix multiplication takes each row of the first matrix and dots it with a column of the second one is really doing something similar to $f(\mathbf{x}) = \mathbf{x}^T \mathbf{w}$ many times. If the rows of $\mathbf{X}$ are the feature vectors, then the multiplication $\mathbf{Xw}$ will give a column vector of all the predictions, since when we are multiplying we are taking each row and dotting with $\mathbf{w}$

Now, let $\mathbf{t}$ be a vector of all the targets. Then $\mathbf{Xw} - \mathbf{t}$ is a vector of the distances between predictions and actual values. This can be used to make a more concise expression of the least squares loss: Dotting a vector is the same as multiplying the components pairwise and summing. Then dotting a vector with itself is the same as squaring each component and summing. The least squares is the average of the squared distances. Taking the average means summing and dividing by the number of elements. So by dotting $\mathbf{Xw} - \mathbf{t}$ with itself we get the sum of squared distances and then we only need to divide by $N$ to get the least squares loss. So, remember the relationship between dotting and transposing:

$$
L = \frac{1}{N}(\mathbf{Xw} - \mathbf{t})^T(\mathbf{Xw} - \mathbf{t})
$$

### Doing calculus on the loss

Remember, we want to find the gradient of L where $\mathbf{w}$ is the vector variable
and solve $\nabla L = \mathbf{0}$ for $\mathbf{w}$. We will use these facts:

* $(\mathbf{w}^T\mathbf{x})' = (\mathbf{x}^T\mathbf{w})' = \mathbf{x}$
* $(\mathbf{w}^T\mathbf{w})' = 2\mathbf{w}$
* For a *symmetric* matrix $\mathbf{C}$ we have $(\mathbf{w}^T\mathbf{Cw})' = 2\mathbf{Cw}$

When multiplying out the expression for $L$ and using these rules

$$\nabla L = \frac{2}{N}\mathbf{X}^T\mathbf{Xw} - \frac{2}{N}\mathbf{X}^T\mathbf{t}$$

We then have $\nabla L = 0 \iff \mathbf{X}^T\mathbf{Xw} = \mathbf{X}^T\mathbf{t}$

If it exists, we can premultiply with $(\mathbf{X}^T\mathbf{X})^{-1}$ on both sides to get a closed expression of $\mathbf{w}$. This $\mathbf{w}$ is the vector of optimal weights.

## Non-linear regression

Until now our model has been a linear function, but a model is just a function, so it can also be a polynomial. Let's start with the one-dimensional case where our feature is just $x$, then our model is

$f(x) = w_0 + w_1 x + w_2 x^2 + ... , w_n x^n$

What if we completely different case where we wanted a *linear* model where the features were all of the form $(1, x, x^2, ..., x^n)^T$. Then our linear model would be exactly the same as above: We just want a coefficient to multiply with each component in the feature vector. What all of this means is that we should just turn our case where we want a polynomial model of a scalar-features $x$ into a linear model of vector-features $(1, x, x^2, ..., x^n)$.

Remember the data matrix $\mathbf{X}$ where each row was a data point. In the scalar case our $\mathbf{X}$ has only one column with just $x$'es. But now we want to add a columnn of just ones before that and a column with $x^2$'es after that and so on.

## Overfitting

When you have a linear model you do not expect the function to go perfectly through all the data points, but since polynomials can go up and down many times depending on the degree of the polynomial, one could get a polynomial which would go perfectly through all the data points. This would be very good according to the least squares loss:

We want the least squares loss to be as low as possible. It is the average of the squared distances. Since the polynomial would go through all the data points the distances would be 0 and so the whole loss would be 0. 

It seems good, but the problem is that we are modelling the data in order to predict new data which we have not seen. We distinguish between different sets of data points. There is the **training set** which is the $\mathbf{X}$ that we have been using up to now to find the best weights and so on. But we also have a **test set** which are other data points which we only see when we are done with making our model. We can see how close the function (line or polynomial) is to these unseen data points by using the least squares. The testing loss is what should matter since it is representative of the real case: Trying to predict some data which was not taken into account when learning.

Our high-degree polynomial model might be good on the training set but bad on the the test set. When it is good on the test set we say that it *generalizes* well. If it seems good on the training set