### Agile Development Requirement Analysis and Story Points Allocation

#### **Important Notes:**
1. **Balancing Workload:** The primary goal is to ensure that the total points for each team member are approximately equal. If your points in the Employee phase are lower, you will have additional tasks in the HR phase to balance the workload. This is an initial estimate, and I will dynamically adjust the story points based on the actual difficulty encountered.
   
2. **Reporting Issues:** Please communicate any blockers or challenges you face immediately, either directly to me or in the group chat. I or other team members will help you resolve them promptly.

3. Since our Angular training have not finished yet, so this requirement dos is only for **Employee** section.

### **Backend - Employee Focused**

1. **Microservices Architecture** - **Total: 5 SP** - **Assigned to L**
   - **Microservices Structure and Organization** - *SP: 2*
     - **AC1:** Design and implement the overall microservices architecture.
     - **AC2:** Ensure each service can communicate effectively through the message queue.
   - **API Gateway Routing and Caching** - *SP: 3*
     - **AC1:** Set up API Gateway with routing for different microservices.
     - **AC2:** Implement Redis caching for API Gateway.

2. **Microservices Operations** - **Total: 4 SP** - **Assigned to L**
   - **Service Discovery and Health Check** - *SP: 2
     - **AC1:** Implement service discovery for microservices.
     - **AC2:** Implement health checks to monitor service availability.
   - **Jenkins CI/CD and Dockerization** - *SP: 2*
     - **AC1:** Set up Jenkins for automated builds and deployments.
     - **AC2:** Dockerize microservices for consistent deployment.

3. **Backend Logging and Error Management** - **Total: 3 SP** - **Unassigned!! **
   - **Logging and Error Tracking** - *SP: 3*
     - **AC1:** Implement logging for all backend services.
     - **AC2:** Set up error tracking and monitoring for APIs.

4. **Auth Service** - **Total: 4 SP** - **Assigned to L**
   - **User Authentication and Authorization** - *SP: 2*
     - **AC1:** Implement user registration, login, and password reset.
     - **AC2:** Implement email verification for account activation.
   - **API Gateway Authentication** - *SP: 2*
     - **AC1:** Set up authentication for all API routes via API Gateway.
     - **AC2:** Ensure secure token management and validation.

5. **Notification Service** - **Total: 4 SP** - **Assigned to B**
   - **Email and SMS Notification APIs** - *SP: 2*
     - **AC1:** Implement an API for sending email notifications.
     - **AC2:** Provide an extension point for future SMS notifications.
   - **Email Template Management** - *SP: 2*
     - **AC1:** Create and manage email templates in HTML.
     - **AC2:** Ensure templates are easily modifiable for different use cases.

6. **User Service** - **Total: 2 SP** - **Unassigned!!**
   - **User Information Management** - *SP: 2*
     - **AC1:** Implement CRUD operations for user information.
     - **AC2:** Implement user search, filtering, and pagination.

7. **File Service** - **Total: 2 SP** - **Unassigned!!**
   - **File Upload and Management** - *SP: 2*
     - **AC1:** Implement API for generating S3 presigned URLs.
     - **AC2:** Set up S3 for secure file storage and management.

8. **Onboarding Application Service** - **Total: 9 SP** - **Assigned to A**
   - **Application Models and CRUD Operations** - *SP: 4
     - **AC1:** Design models based on onboarding requirements.
     - **AC2:** Implement CRUD operations for applications.
   - **Onboarding Status Management** - *SP: 3
     - **AC1:** Implement status management for onboarding applications.
     - **AC2:** Implement file upload and download functionality.
   - **Testing and Validation** - *SP: 2
     - **AC1:** Conduct unit tests for onboarding service.
     - **AC2:** Validate file handling and application status workflows.

9. **Personal Information Service** - **Total: 6 SP** - **Assigned to B**
   - **Personal Information Models and CRUD Operations** - *SP: 4*
     - **AC1:** Design models based on personal information requirements.
     - **AC2:** Implement CRUD operations for personal information.
   - **Testing and Validation** - *SP: 2
     - **AC1:** Conduct unit tests for personal information service.
     - **AC2:** Ensure all validations and error handling are in place.

10. **Visa Status Management Service** - **Total: 8 SP** - **Assigned to C**
    - **Visa Status Models and CRUD Operations** - *SP: 3*
      - **AC1:** Design models based on visa status requirements.
      - **AC2:** Implement CRUD operations for visa statuses.
    - **File Upload Sequence and State Management** - *SP: 3*
      - **AC1:** Implement a sequence protector for file uploads.
      - **AC2:** Ensure correct responses based on visa status.
    - **Testing and Validation** - *SP: 2*
      - **AC1:** Conduct unit tests for visa status management.
      - **AC2:** Validate the state management logic.

11. **Housing Service** - **Total: 11 SP** - **Assigned to D**
    - **Housing Models and CRUD Operations** - *SP: 3
      - **AC1:** Design models based on housing requirements.
      - **AC2:** Implement CRUD operations for housing details.
    - **Facility Reports Management** - *SP: 4*
      - **AC1:** Implement viewing and managing facility reports.
      - **AC2:** Ensure reports can be filtered and sorted.
    - **Comments Design and Implementation** - *SP: 4*
      - **AC1:** Implement tree-structured comments for facility reports.
      - **AC2:** Ensure comments are threaded and support replies.

### **Frontend - Employee Focused**

1. **Frontend Architecture** - **Total: 5 SP** - **Assigned to L**
   - **Project Setup and Style Guide
     - **AC1:** Set up the frontend project structure.
     - **AC2:** Define and implement a common style.
   - **Component and Axios Wrapping
     - **AC1:** Build common components library containing such as progress bar.
     - **AC2:** Wrap Axios for API gateway authentication, double token. 

2. **Layouts** - **Total: 2 SP** - **Assigned to L**
   - **Layout Components** - *SP: 2*
     - **AC1:** Implement navigation bar, sidebar, and footer.
     - **AC2:** Implement profile management and theme switching.

3. **File Upload Component** - **Total: 3 SP** - **Unassigned!!**
   - **File Upload Implementation** - *SP: 3*
     - **AC1:** Develop file upload components.
     - **AC2:** Integrate with S3 via presigned URLs.

4. **Auth Pages** - **Total: 4 SP** - **Assigned to B**
   - **Authentication Pages** - *SP: 4*
     - **AC1:** Implement login page.
     - **AC2:** Implement registration page.
     - **AC3:** Implement password reset page.
     - **AC4:** Implement email verification page.

5. **Onboarding Application Page** - **Total: 9 SP** - **Assigned to A**
   - **Application Status Pages** - *SP: 3*
     - **AC1:** Implement status pages for different application states (Rejected, Not Started, Pending, Approved).
   - **Dynamic Application Form** - *SP: 5*
     - **AC1:** Implement dynamic forms for onboarding applications.
     - **AC2:** Ensure the form can adapt based on the user's input and application state.
   - **File Upload Integration** - *SP: 2*
     - **AC1:** Integrate file upload with the onboarding form.
     - **AC2:** Display upload progress and handle errors.

6. **Personal Information Page** - **Total: 5 SP** - **Assigned to B**
   - **Personal Information Form** - *SP: 58
     - **AC1:** Implement the personal information form.
     - **AC2:** Ensure validation and error handling.
     - **AC3:** Integrate form with backend APIs for CRUD operations.

7. **Visa Status Management Page** - **Total: 9 SP** - **Assigned to C**
   - **Visa Status Form and File Upload** - *SP: 5*
     - **AC1:** Implement multi-file upload using a wizard form.
     - **AC2:** Ensure correct sequence and validations for file uploads.
   - **Status Display and Download** - *SP: 4*
          - **AC1:** Display appropriate messages based on visa status.
               - **AC2:** Implement download functionality for I-983 form.

8. **Housing Page** - **Total: 10 SP** - **Assigned to D**
   - **House Preview and Roommate List** - *SP: 3*
     - **AC1:** Implement house details preview.
     - **AC2:** Implement roommate list display.
   - **Facility Reports and Comments** - *SP: 7*
     - **AC1:** Implement facility report forms.
     - **AC2:** Implement report viewing and filtering.
     - **AC3:** Implement comment section (offcanvas or modal).

9. **Frontend Performance Optimization** - **Total: 4 SP** - **UnAssigned!!**
   - **Performance Enhancements** - *SP: 4*
     - **AC1:** Implement lazy loading and code splitting.
     - **AC2:** Optimize components using memoization.

### **Total Points Overview:**

| Name       | Backend | Frontend | Total |
| ---------- | ------- | -------- | ----- |
| Liam       | 13      | 7        | 20    |
| A          | 9       | 9        | 18    |
| B          | 10      | 9        | 19    |
| C          | 8       | 9        | 17    |
| D          | 11      | 11       | 22    |
| Unassigned | 7       | 7        | 14    |
