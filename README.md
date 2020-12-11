# 2D-Posenet
A posenet based web application to render posenet predicted keypoints on 3D Character 

## How to Reproduce Results

- First clone this repo.
- Open Command Prompt.
- Change directory to the clone repo using `cd` command as `cd Desktop\3D-Posenet`
- Now right this command `python -m http.server 8000`. This will start a server at port 8000
- Now open your browser and type `localhost:8000` in URL. This will run the project.

## Some information about code

- **Index.html**, this is the main file to render 
- **model.js**, this file contains 3D character rendering file.
- **script.js**, this file contains code for posenet and its rendering.
- **style.css**, this files just adds some css to index.html.

## Todo 

- [ ] Create a function in script.js to calculate angle for each keypoint
- [ ] Create a function in model.js to map the Angles to the angles required by model according to constrains.

## Contribution

- To contribute, first just clone and reproduce results.
- Then see the **issues** or **Todo** in repo.
- Do the changes accordingly.
- Commit the changes in new branch.
- Do a pull request.

