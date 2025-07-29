// authService.js - Centralized authentication service
class AuthService {
  constructor() {
    this.token = this.getToken();
    this.user = this.getUser();
  }

  // Get token from secure httpOnly cookie (preferred) or sessionStorage
  getToken() {
    return sessionStorage.getItem('token');
  }

  // Get user data from memory or sessionStorage
  getUser() {
    const userData = sessionStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  // Set authentication data
  setAuth(token, user) {
    this.token = token;
    this.user = user;
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  // Clear authentication data
  clearAuth() {
    this.token = null;
    this.user = null;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.token && !!this.user;
  }

  // Get authorization header
  getAuthHeader() {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {};
  }
}

export const authService = new AuthService();