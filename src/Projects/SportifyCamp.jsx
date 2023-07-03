
const SportifyCamp = () => {
    return (
        <div>
            <h2>Name: Sportify Camp</h2>
            <p>Technologies Used: React.js | Node.js | MongoDB | Express.js | Firebase | Stripe</p>

            <h3>Features: </h3>
            <p>
                1. Role-based Access Control and Secure Data Handling: Your website incorporates role-based access control, allowing different users (admin, instructor, and normal user) to access specific routes and perform designated actions. The implementation of JWT and secure data handling with Axios ensures that sensitive information is transmitted and stored securely, enhancing the overall security and privacy of the website.
            </p>
            <p>
                2. Stripe Payment Integration for Enrollment Confirmation: The integration of Stripe payment methods enables a seamless enrollment process for users. They can select a class and confirm their enrollment by making a payment. This feature simplifies the payment process, providing a convenient and secure way for users to secure their spot in the desired classes.
            </p>
            <p>
                3. Comprehensive Admin Panel for User and Class Management: The admin panel of your website offers extensive functionality for managing users and classes. The admin can oversee and manage all users and classes, including the ability to make users admin or instructors. They have the authority to approve or deny classes added by instructors and provide valuable feedback on denied classes. This robust admin panel empowers efficient management and supervision of the entire platform.
            </p>
        </div>
    );
};

export default SportifyCamp;