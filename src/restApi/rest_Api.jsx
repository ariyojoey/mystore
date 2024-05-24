import axios from "axios";

const baseUrl = "http://localhost:8081";

const ApiService = {
  getUserCredentials: async (Email, hashedPassword) => {
    const apiUrl = `${baseUrl}/user/loginUser`;
    const headers = { "Content-Type": "application/json" };

    try {
      const response = await axios.post(
        apiUrl,
        {
          Email: Email,
          Password: hashedPassword,
        },
        { headers, timeout: 10000 }
      );

      if (response.status >= 200 && response.status < 300) {
        return { success: true, data: response.data };
      } else {
        return { success: false, error: response.data.error };
      }
    } catch (error) {
      console.error("Network error:", error);
      return { success: false, error: `Network error: ${error.message}` };
    }
  },

  registerUser: async (
    FirstName,
    LastName,
    Email,
    hashedPassword,
    confirmPassword
  ) => {
    console.log("Signing up");
    const apiUrl = `${baseUrl}/user/registerUser`;
    const headers = { "Content-Type": "application/json" };
    const body = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Password: hashedPassword,
      ConfirmPassword: confirmPassword,
    };

    console.log(body);

    try {
      const response = await axios.post(apiUrl, body, { headers, timeout: 100000 });

      console.log(response.data);

      if (response.status >= 200 && response.status < 300) {
        return { success: true, data: response.data };
      } else {
        return { success: false, error: response.data.msg };
      }
    } catch (error) {
      console.error("Network error:", error);
      return { success: false, error: `Network error: ${error.message}` };
    }
  },
};

export default ApiService;
