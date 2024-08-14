import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv("coin_BinanceCoin.csv")

high = df.High
date = df.Date

plt.figure(figsize=(15, 6))
ax = sns.barplot(x="date", y="high", hue="date", data=)
