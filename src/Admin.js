import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'D:/Program Files/food-delivery/src/styles.css';

const Admin = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [deliveryPartners, setDeliveryPartners] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [loadingDeliveryPartners, setLoadingDeliveryPartners] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const fetchUserData = async () => {
    setLoadingUsers(true);
    try {
      const response = await axios.get('http://localhost:5000/api/users/users');
      setUsers(response.data.data);
      setLoadingUsers(false);
    } catch (error) {
      setError('Error fetching user data.');
      setLoadingUsers(false);
      console.error('Error fetching user data:', error);
    }
  };

  const fetchOrderData = async () => {
    setLoadingOrders(true);
    try {
      const response = await axios.get('http://localhost:5000/api/orders');
      setOrders(response.data);
      setLoadingOrders(false);
    } catch (error) {
      setError('Error fetching order data.');
      setLoadingOrders(false);
      console.error('Error fetching order data:', error);
    }
  };

  const fetchDeliveryPartnerData = async () => {
    setLoadingDeliveryPartners(true);
    try {
      const response = await axios.get('http://localhost:5000/api/deliveryboys');
      setDeliveryPartners(response.data);
      setLoadingDeliveryPartners(false);
    } catch (error) {
      setError('Error fetching delivery partners.');
      setLoadingDeliveryPartners(false);
      console.error('Error fetching delivery partners:', error);
    }
  };

  const handleLogin = () => {
    if (adminName === 'admin' && adminPassword === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Incorrect username or password.');
    }
  };

  useEffect(() => {
    if (selectedOption === 'VIEW USER INFO') {
      fetchUserData();
    } else if (selectedOption === 'VIEW ORDER INFO') {
      fetchOrderData();
    } else if (selectedOption === 'VIEW DELIVERY PARTNER INFO') {
      fetchDeliveryPartnerData();
    }
  }, [selectedOption]);

  if (!isAuthenticated) {
    return (
      <div>
        <h2>Admin Login</h2>
        <div>
          <label htmlFor="adminName">Admin Name:</label>
          <input
            type="text"
            id="adminName"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="adminPassword">Password:</label>
          <input
            type="password"
            id="adminPassword"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      </div>
    );
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <input
          type="radio"
          id="viewUserInfo"
          name="viewOption"
          value="VIEW USER INFO"
          onChange={handleRadioChange}
        />
        <label htmlFor="viewUserInfo">View User Info</label>

        <input
          type="radio"
          id="viewOrderInfo"
          name="viewOption"
          value="VIEW ORDER INFO"
          onChange={handleRadioChange}
        />
        <label htmlFor="viewOrderInfo">View Order Info</label>

        <input
          type="radio"
          id="viewDeliveryPartnerInfo"
          name="viewOption"
          value="VIEW DELIVERY PARTNER INFO"
          onChange={handleRadioChange}
        />
        <label htmlFor="viewDeliveryPartnerInfo">View Delivery Partner Info</label>
      </div>

      {selectedOption === 'VIEW USER INFO' && loadingUsers && <p>Loading users...</p>}
      {selectedOption === 'VIEW USER INFO' && !loadingUsers && users.length > 0 && (
        <div>
          <h3>User Information</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>City</th>
                <th>Pincode</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.city}</td>
                  <td>{user.pincode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedOption === 'VIEW ORDER INFO' && loadingOrders && <p>Loading orders...</p>}
{selectedOption === 'VIEW ORDER INFO' && !loadingOrders && orders.length > 0 && (
  <div>
    <h3>Order Information</h3>
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>User Name</th>
          <th>Dish</th>
          <th>Total Price</th>
          <th>Status</th>
          <th>Payment</th>
          <th>Date</th> {/* Added a new column for Date */}
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>{order._id}</td>
            <td>{order.userDetails.name}</td>
            <td>{order.dishName}</td>
            <td>{order.totalPrice}</td>
            <td>{order.status}</td>
            <td>{'Paid'}</td>
            <td>{new Date(order.date).toLocaleDateString()}</td> {/* Format and display the date */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


      {selectedOption === 'VIEW DELIVERY PARTNER INFO' && loadingDeliveryPartners && <p>Loading delivery partners...</p>}
      {selectedOption === 'VIEW DELIVERY PARTNER INFO' && !loadingDeliveryPartners && deliveryPartners.length > 0 && (
        <div>
          <h3>Delivery Partner Information</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {deliveryPartners.map((partner) => (
                <tr key={partner._id}>
                  <td>{partner._id}</td>
                  <td>{partner.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Admin;
