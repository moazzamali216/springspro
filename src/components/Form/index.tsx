import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    phonenumber: '',
  
    // AT&T Account Option
    agreementtype: '',
    eip: '',
    promotion: '',
    paperless: '',
    specialinstruction: '',
  
    // AT&T Account Information
    businesslegalname: '',
    businessaddress: '',
    businesscity: '',
    businessstate: '',
    businesszip: '',
    taxid: '',
    contactname: '',
    contactphone: '',
    contactemail: '',
    locationid: '',
  
    // Order Payment Options
    billtomobile: '',
    creditcardpayment: '',
  
    // Order Shipping Information
    singleormultiaddresshipment: '',
    attentionname: '',
    shippingaddress: '',
    shippingcity: '',
    shippingstate: '',
    shippingzip: '',
  
    // Carrier Port Information
    currentwirelesscarrier: '',
    accountnumber: '',
    pinorpassword: '',
    ssnortaxid: '',
    billingname: '',
    billingaddress: '',
    billingcity: '',
    billingstate: '',
    billingzip: '',
    authorizedname: ''
  });
  

  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Submit form data to the backend (replace URL with your backend API)
      await axios.post('http://localhost:5000/api/submit', formData);
      setSubmitSuccess(true);
      setErrorMessage('');
      // setFormData({""}); // Clear form
    } catch (error) {
      setSubmitSuccess(false);
      setErrorMessage('Failed to submit form data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container container mx-auto px-4 xl:px-[120px] mt-[320px]">
      <form onSubmit={handleSubmit}>
        
        <h3 className="text-xl text-gray-800 font-semibold mb-4 sm:text-center text-start">
          AT&T Seller Information
        </h3>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-4">
          <div className="w-full">
            <h6 className="text-[#3C3C3C] sm:text-center text-start">Name</h6>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>
          <div>
            <h6 className="text-[#3C3C3C] sm:text-center text-start">Email</h6>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>
          <div>
            <h6 className="text-[#3C3C3C] sm:text-center text-start">Phone</h6>
            <input
              name="phonenumber"
              placeholder="Enter Phone"
              value={formData.phonenumber}
              onChange={handleChange}
              className="w-full  border-b border-gray-300 py-2"
            />
          </div>
        </div>

        <h3 className="text-xl text-gray-800 font-semibold mb-4 sm:text-center text-start mt-10">
          AT&T Account Option
        </h3>
        <div className="grid grid-cols-1 items-end mt-10 md:grid-cols-3 gap-4">
          <select
            name="agreementtype"
            value={formData.agreementtype}
            onChange={handleChange}
            className="border-b h-10 border-gray-300 py-2"
          >
            <option value="">Select Agreement Type</option>
            <option value="amb">AMB</option>
            <option value="acda">ACDA Attainment/MAC</option>
          </select>

          {formData.agreementtype === 'acda' && (
            <input
              name="eip"
              placeholder="Enter What EIP Limit is needed"
              value={formData.eip}
              onChange={handleChange}
              className="w-full mt-4 border-b border-gray-300 py-2"
            />
          )}
          <select
            name="promotion"
            value={formData.promotion}
            onChange={handleChange}
            className="border-b h-10 border-gray-300 py-2"
          >
            <option value="">Promotions</option>
            <option value="accepted">Accepted</option>
            <option value="expected">Expected</option>
          </select>

          {/* Paperless Billing Section */}
          <div className="mt-4">
            <h4 className="text-lg text-gray-800 font-semibold mb-2">Paperless Billing</h4>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paperless"
                  value="accepted"
                  checked={formData.paperless === 'accepted'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Accepted
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paperless"
                  value="declined"
                  checked={formData.paperless === 'declined'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Declined
              </label>
            </div>
          </div>

          <div className="">
            <textarea
              name="specialinstruction"
              value={formData.specialinstruction}
              className="w-full"
              onChange={handleChange}
              placeholder="Enter Special Instruction"
              style={{ resize: 'none' }}
            ></textarea>
          </div>
        </div>

        <h3 className="text-xl text-gray-800 font-semibold mb-4 sm:text-center text-start mt-10">
          Order Payment Options
        </h3>
        <div className="grid items-end grid-cols-1 mt-10 md:grid-cols-3 gap-4">
          <select
            name="billtomobile"
            value={formData.billtomobile}
            onChange={handleChange}
            className="border-b h-10 border-gray-300 py-2"
          >
            <option value="">Bill to Mobile</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <select
            name="creditcardpayment"
            value={formData.creditcardpayment}
            onChange={handleChange}
            className="border-b h-10 border-gray-300 py-2"
          >
            <option value="">Credit Card Payment?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
  <h3 className="text-xl text-gray-800 font-semibold mb-4 sm:text-center text-start">
    AT&T Account Information
  </h3>
  <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-4">
    <div className="mb-4">
      <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Business Legal Name</h6>
      <input
        type="text"
        name="businesslegalname"
        placeholder="Enter Business Legal Name"
        value={formData.businesslegalname}
        onChange={handleChange}
        className="border-b focus:outline-none border-gray-300 py-2 w-full"
      />
    </div>

    <div className="mb-4">
      <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Business Address</h6>
      <input
        type="text"
        name="businessaddress"
        placeholder="Enter Business Address"
        value={formData.businessaddress}
        onChange={handleChange}
        className="border-b focus:outline-none border-gray-300 py-2 w-full"
      />
    </div>

    <div className="mb-4">
      <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Business City</h6>
      <input
        type="text"
        name="businesscity"
        placeholder="Enter Business City"
        value={formData.businesscity}
        onChange={handleChange}
        className="border-b focus:outline-none border-gray-300 py-2 w-full"
      />
    </div>

    <div className="mb-4">
      <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Business State</h6>
      <input
        type="text"
        name="businessstate"
        placeholder="Enter Business State"
        value={formData.businessstate}
        onChange={handleChange}
        className="border-b focus:outline-none border-gray-300 py-2 w-full"
      />
    </div>

    <div className="mb-4">
      <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Business Zip</h6>
      <input
        type="text"
        name="businesszip"
        placeholder="Enter Business Zip"
        value={formData.businesszip}
        onChange={handleChange}
        className="border-b focus:outline-none border-gray-300 py-2 w-full"
      />
    </div>

    <div className="mb-4">
      <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Tax ID</h6>
      <input
        type="text"
        name="taxid"
        placeholder="Enter Tax ID"
        value={formData.taxid}
        onChange={handleChange}
        className="border-b focus:outline-none border-gray-300 py-2 w-full"
      />
    </div>

    <div className="mb-4">
      <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Contact Name</h6>
      <input
        type="text"
        name="contactname"
        placeholder="Enter Contact Name"
        value={formData.contactname}
        onChange={handleChange}
        className="border-b focus:outline-none border-gray-300 py-2 w-full"
      />
    </div>

    <div className="mb-4">
      <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Contact Phone</h6>
      <input
        type="text"
        name="contactphone"
        placeholder="Enter Contact Phone"
        value={formData.contactphone}
        onChange={handleChange}
        className="border-b focus:outline-none border-gray-300 py-2 w-full"
      />
    </div>

    <div className="mb-4">
      <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Contact Email</h6>
      <input
        type="email"
        name="contactemail"
        placeholder="Enter Contact Email"
        value={formData.contactemail}
        onChange={handleChange}
        className="border-b focus:outline-none border-gray-300 py-2 w-full"
      />
    </div>

    <div className="mb-4">
      <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Location ID</h6>
      <input
        type="text"
        name="locationid"
        placeholder="Enter Location ID"
        value={formData.locationid}
        onChange={handleChange}
        className="border-b focus:outline-none border-gray-300 py-2 w-full"
      />
    </div>
  </div>
</div>

        {/* Order Shipping Information */}
        <h3 className="text-xl text-gray-800 font-semibold mb-4 sm:text-center text-start mt-10">
          Order Shipping Information
        </h3>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-4">
          <select
            name="singleormultiaddresshipment"
            value={formData.singleormultiaddresshipment}
            onChange={handleChange}
            className="border-b mb-4 border-gray-300 py-2"
          >
            <option value="">Select Shipment Mode</option>
            <option value="single">Single Shipment Address</option>
            <option value="multiple">Multiple Shipment Address</option>
          </select>
          <div className="mb-4">
            <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Attention Name</h6>
            <input
              type="text"
              name="attentionname"
              placeholder="Enter Attention Name"
              value={formData.attentionname}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Shipping Address</h6>
            <input
              type="text"
              name="shippingaddress"
              placeholder="Enter Shipping Address"
              value={formData.shippingaddress}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Shipping City</h6>
            <input
              type="text"
              name="shippingcity"
              placeholder="Enter Shipping City"
              value={formData.shippingcity}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Shipping State</h6>
            <input
              type="text"
              name="shippingstate"
              placeholder="Enter Shipping State"
              value={formData.shippingstate}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-sm md:text-center text-start font-medium text-gray-700">Shipping Zip</h6>
            <input
              type="text"
              name="shippingzip"
              placeholder="Enter Shipping Zip"
              value={formData.shippingzip}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>
        </div>

        {/* Carrier Port Information */}
        <h3 className="text-xl text-gray-800 font-semibold mb-4 sm:text-center text-start mt-10">
          Carrier Port Information
        </h3>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <h6 className="text-start md:text-center">Current Wireless Carrier</h6>
            <input
              type="text"
              name="currentwirelesscarrier"
              placeholder="Enter Current Wireless Carrier"
              value={formData.currentwirelesscarrier}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-start md:text-center">Account Number</h6>
            <input
              type="text"
              name="accountnumber"
              placeholder="Enter Account Number"
              value={formData.accountnumber}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-start md:text-center">Pin or Password</h6>
            <input
              type="text"
              name="pinorpassword"
              placeholder="Enter Pin or Password"
              value={formData.pinorpassword}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-start md:text-center">SSN or TaxID</h6>
            <input
              type="text"
              name="ssnortaxid"
              placeholder="Enter SSN or Tax ID"
              value={formData.ssnortaxid}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-start md:text-center">Billing Name</h6>
            <input
              type="text"
              name="billingname"
              placeholder="Enter Billing Name"
              value={formData.billingname}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-start md:text-center">Billing Address</h6>
            <input
              type="text"
              name="billingaddress"
              placeholder="Enter Billing Address"
              value={formData.billingaddress}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-start md:text-center">Billing City</h6>
            <input
              type="text"
              name="billingcity"
              placeholder="Enter Billing City"
              value={formData.billingcity}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-start md:text-center">Billing State</h6>
            <input
              type="text"
              name="billingstate"
              placeholder="Enter Billing State"
              value={formData.billingstate}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-start md:text-center">Billing Zip</h6>
            <input
              type="text"
              name="billingzip"
              placeholder="Enter Billing Zip"
              value={formData.billingzip}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-start md:text-center">Authorized Name</h6>
            <input
              type="text"
              name="authorizedname"
              placeholder="Enter Authorized Name"
              value={formData.authorizedname}
              onChange={handleChange}
              className="border-b focus:outline-none border-gray-300 py-2 w-full"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <button type="submit" disabled={loading} className="bg-blue-500 text-white py-2 px-4 rounded">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          {submitSuccess && <p className="text-green-500 mt-4">Form submitted successfully!</p>}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default Form;
