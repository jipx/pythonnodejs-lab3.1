# Clone the project
`git clone https://github.com/jipx/pythonnodejs-lab3.1.git`

# pythonnodejs-lab3.1

Link Cloud 9 and github:
https://medium.com/@AshKamdar/3-integrate-aws-cloud9-with-github-a1982e05844f

password authentication no longer supported, need to use token:
https://github.com/settings/tokens
Personal access tokens (classic) function like ordinary OAuth access tokens. They can be used instead of a password for Git over HTTPS, or can be used to authenticate to the API over Basic Authentication.

# Configure Git Username and Email:
It's a good practice to configure your Git username and email globally on your Cloud9 environment so that your commits are properly attributed. Run the following commands, replacing "Your Name" and "your.email@example.com" with your Git username and email:  
`git config --global user.name "Your Name"`  
`git config --global user.email "your.email@example.com"`

# Generate a Personal Access Token (PAT) on GitHub:
To securely authenticate with GitHub from your Cloud9 environment, you can generate a Personal Access Token (PAT) on GitHub. Follow these steps to create a PAT:

# Log in to your GitHub account.
Click on your profile picture in the top-right corner and select "Settings."
In the left sidebar, click on "Developer settings," then select "Personal access tokens."
Click the "Generate token" button.
Provide a name for your token, select the scopes or permissions you need (usually "repo" and "read:user" are sufficient for Git operations), and set an expiration (optional).
Click the "Generate token" button at the bottom.
Copy the generated token to your clipboard. You'll need it in the next step.

# Configure Git to Use the Personal Access Token:
In your Cloud9 terminal, configure Git to use the Personal Access Token for authentication when interacting with GitHub. Replace "your-personal-access-token" with the actual token you generated:  

`git credential approve <your-personal-access-token>`

# Test Your Git Configuration:
You can test your Git configuration by cloning a GitHub repository or performing any Git operation that requires authentication. For example, clone a repository:  
`git clone https://github.com/your-username/your-repository.git`

You should be able to clone the repository without entering your GitHub username and password.

With these steps, you've configured Git credentials in your AWS Cloud9 environment using a Personal Access Token (PAT) for secure authentication with GitHub. This setup allows you to work with GitHub repositories without needing to enter your credentials each time you interact with Git.




