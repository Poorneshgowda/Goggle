// Home.js
import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <>
       <br/>
    
    <header class="bg-light text-dark text-center py-1">
      <h3>Contact Us</h3>
  </header>
    <div class="contact-form" id="contact">
    <div class="container">
    <p>
        If you have any questions, Mail us here <a href="mailto:support@example.com">Goggle@gmail.com</a><br/><span>Conatct Number is +91-999999000</span>
      </p>
     
        <h2>Ask Your Query</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    
</div>


 <footer id ="footer" class="bg-dark text-light text-center py-2">
 <p>&copy; 2023 Goggles - page
<br></br>
 www.goggles.com
 </p>
</footer>
</>

  );
};

export default Contact;
