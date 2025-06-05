import numpy as np
T = 100
table_sizes = []
alpha = 5

for t in range(1,T):
  print('t',t)
  p_new = alpha/(t-1+alpha)
  print('p_new',p_new)
  do_new = np.random.binomial(n=1,p=p_new)
  print(do_new)
  if do_new == 1:
    print('making new table')
    table_sizes.append(1)
  else:
    print('doing existing table')
    existing_normalized = np.array(table_sizes).astype(np.float32)
    existing_normalized /= existing_normalized.sum()
    assigned_table = np.random.choice(len(table_sizes),p=existing_normalized)
    table_sizes[assigned_table] += 1
  print('now', table_sizes)
print('done', table_sizes)
import matplotlib.pyplot as plt
plt.plot(np.array(table_sizes))