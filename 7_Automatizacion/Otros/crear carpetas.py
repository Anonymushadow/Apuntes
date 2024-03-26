import os
from pathlib import Path, PurePath

#os.makedir("dataset")

#os.mkdir("Dataset1")

#os.makedirs(os.path.join("Dataset4", "Scripts"))

#Path("Dataset2").mkdir(exist_ok=True)

PurePath.joinpath(Path.cwd(), "Dataset5", "Scripts").mkdir(parents=True)