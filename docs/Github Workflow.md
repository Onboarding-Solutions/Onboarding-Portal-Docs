## GitHub Workflow

### **Branching Strategy**
When working on any feature, it is critical to follow a structured branching strategy to maintain code integrity and simulate a professional working environment. Here's the approach we will enforce:

1. **Feature Branches:**
   - Each developer must work on a separate feature branch derived from the `master` branch. 
   - The `master` branch should remain untouched and is reserved for production-ready code only.
   - To start working on a feature:
     - Create a new branch from `master` named as `feature/your-feature-name`.
     - Develop your feature on this branch.

2. **Preview Branch:**
   - In addition to the `master` branch, I will create a `preview` branch.
   - The `preview` branch will be used for online previews of the latest code before merging into `master`.
   - It serves as an intermediate step for testing features in a near-production environment.

### **Pull Requests (PRs)**
Pull Requests are a vital part of our workflow and will be strictly enforced to ensure code quality and collaboration. The following rules apply:

1. **Creating a PR:**
   - After completing your feature development, first, ensure your local `master` branch is up-to-date by rebasing it with the repository's `master` branch.
   - Once your local `master` is rebased, switch back to your feature branch, rebase it onto `master`, and resolve any conflicts.
   - Push your feature branch to GitHub and create a Pull Request (PR) from your feature branch to the `preview` branch (or `master`, depending on the situation).

2. **Code Review Process:**
   - Each PR must be reviewed by at least one other team member, who will act as a guarantor.
   - The guarantor is responsible for conducting a thorough code review, including:
     - **Harmful Code Check:** Ensure there are no vulnerabilities or malicious code.
     - **Code Complexity Check:** Identify and flag overly complex or poorly structured code.
     - **Code Standard Compliance:** Ensure that the code follows our agreed-upon development standards and best practices.
   - PRs should not be merged until they have been approved by the guarantor.

3. **Merging Process:**
   - Merging permissions are restricted to the team lead (myself).
   - Once a PR is reviewed and approved, I will be responsible for merging it into the `preview` or `master` branch, depending on the state of the project.
   - This ensures that all code entering the `master` branch is of high quality and production-ready.

### **CI/CD Integration**
Over the next two days, I will set up our Continuous Integration/Continuous Deployment (CI/CD) pipeline. This system will:

1. **Automatic Builds and Deployments:**
   - Regularly build and deploy the code from the `preview` and `master` branches.
   - The `preview` branch will be deployed to an online preview environment with a public URL for team testing.
   - The `master` branch will be reserved for production deployments.

2. **Regular Testing and Feedback:**
   - The CI/CD pipeline will include automated tests to ensure that new code does not introduce bugs or regressions.
   - Team members will receive feedback on their commits, helping maintain code quality.

### **Additional Notes**
- **Communication:** Always communicate any blockers or issues as soon as they arise. The sooner we address problems, the smoother our development process will be.
- **Consistency:** Following this workflow consistently will help us maintain a high standard of code quality and streamline our development process.
