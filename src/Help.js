import React from 'react';
import 'D:/Program Files/food-delivery/src/styles.css';

const Help = () => {
  return (
    <div className="help-container">
      <h1 className="help-title">Help & Support</h1>
      
      <section className="terms-conditions">
        <h2>Terms and Conditions</h2>
        <p>Welcome to Food Express! By using our services, you agree to the following terms and conditions:</p>
        <ul>
          <li>Users must be at least 18 years old to use the service.</li>
          <li>Food Express reserves the right to modify or terminate the service at any time without notice.</li>
          <li>Payment for orders must be made through the available payment methods on the platform.</li>
          <li>Users are responsible for providing accurate delivery details for timely and successful deliveries.</li>
          <li>Food Express is not liable for delays or issues caused by third-party delivery partners.</li>
        </ul>
      </section>

      <section className="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>Your privacy is important to us. Please review the following policy to understand how we collect and use your data:</p>
        <ul>
          <li>We collect personal information (such as name, address, and payment details) to process orders and deliver food to you.</li>
          <li>Your information is stored securely and is not shared with third parties unless necessary for the delivery or as required by law.</li>
          <li>We use cookies and similar technologies to enhance your user experience and improve the functionality of our website and mobile app.</li>
          <li>We may contact you with updates on your orders, promotions, or changes to our service. You can opt out of these communications at any time.</li>
        </ul>
      </section>

      <section className="contact-support">
        <h2>Contact Support</h2>
        <p>If you have any questions or need further assistance, please contact our support team:</p>
        <p>Email: support@foodexpress.com</p>
        <p>Phone: +1 123 456 7890</p>
      </section>
    </div>
  );
};

export default Help;
