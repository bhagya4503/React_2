import styles from './Form.module.css';
import Button from '../Buttons/Button';
import { MdMessage } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Form = () => {
    console.log = {styles}

    const onViaCall = () =>{
      console.log ('Hey this is Bhagya')
    }
  return (
    <div>
   <section className = {styles.container}>
    <div className= {styles.contact_form}>
      <div className={styles.top_btn}>
      <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
      <Button 
        onClick={onViaCall}
      text="VIA CALL" icon={<FaPhoneVolume fontSize="24px"/>}/>
      </div>
      <Button
      isOutline = {true}
      text="VIA CALL" icon={<IoMdMail  fontSize="24px"/>}/>

      <form>
            <div className={styles.form_controler} >
            <label htmlFor="name">Name </label>
            <input type="text" name='name' />
            </div><br />

            <div className={styles.form_controler1}>
            <label htmlFor="name">Email</label>
            <input type="email" name='email' />
            </div><br />


          <div className={styles.form_controler2}>
          <label htmlFor="name">Text</label>
          <textarea name="text" id="text" cols="30" rows="8"></textarea>
          </div><br />

          <div className={styles.btn}>
           <Button text= "SUBMIT BUTTON"></Button>
          </div>

       </form>
    </div>
    <div className= {styles.contact_img}>
  <img src="images/OIP.jpeg" alt="" />

    </div>
   </section>
    </div>
  );
}

export default Form
