import auth0 from 'auth0-js'
import axios from "axios";
const url = process.env.ROOT_API+'/api/private/';

export default class AuthService {

  constructor () {
    this.login = this.login.bind(this)
  }

  // create an instance of auth0.WebAuth with your
  // API and Client credentials
  auth0 = new auth0.WebAuth({
    domain: 'catamarander.us.auth0.com',
    clientID: 'ktZUJHe10z0MBFtw81rrXVD0bimh3p6S',
    redirectUri: 'http://vue-app.s3-website-us-west-2.amazonaws.com/page1',
    audience: 'https://django-vuejs-api',
    responseType: 'token id_token',
    scope: 'openid profile',
    response_mode:'form_post'
  })

  
  // this method calls the authorize() method
  // which triggers the Auth0 login page
  async login () {
    return new Promise((resolve, reject) => { 
      try{
        this.auth0.authorize();
        resolve("Success")
      }catch(e){
        reject(e)
      }
    })
  }

  verifyAuth (access_token) {
    return new Promise((resolve, reject) => {
       axios.get(url, {headers: {Authorization: `Bearer ${access_token}`}}).then((response) => {
        resolve()
        }).catch(e=> reject())

    })
  }

  // a static method to get the access token
  getAuthToken () {
    return this.accessToken
  }
}