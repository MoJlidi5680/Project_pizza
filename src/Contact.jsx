import React from 'react'

const Contact = () => {
  return (
    <div className='backroundcolor'>
    <div className='contact'>
        <div className="leftside">
            <img src="https://static.vecteezy.com/ti/vecteur-libre/p3/2228083-pizza-livraison-sans-contact-quarantaine-isolement-illustrationle-fond-service-de-livraison-coronavirus-quarantaine-livraison-des-aliments-sains-gratuit-vectoriel.jpg" alt="" />
        </div>
        <div className="rightside">

            <h1>Contact Us</h1>
            
            <form action="" method="post">

                <label htmlFor="name">Full Name</label>
                <input type="text" name="name"  placeholder='Enter full name...'/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"  placeholder='Enter email...'/>
                <label htmlFor="message">Message</label>
                <textarea  rows="6"  placeholder='Enter message...'  name='message'></textarea>
                <button type="submit" className='bconatct'>Send Message</button>
            </form>
 
        </div>
    </div>
    </div>
  )
}

export default Contact
