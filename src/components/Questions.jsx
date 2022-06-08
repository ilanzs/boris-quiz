const Questions = ({ onClick }) => {
  return (
    <div className='flex-container'>
      <form className='questions flex-child-q'>
        <div className='question'>
          <p>What is your name?</p>
          <input type='text'></input>
        </div>
        <div className='question'>
          <p>Where do you live?</p>
          <input type='text'></input>
        </div>
        <div className='question'>
          <p>What colour hair do you have?</p>
          <input type='text'></input>
        </div>
        <div className='question'>
          <p>Are you introverted or extroverted?</p>
          <input type='text'></input>
        </div>
        <div className='question'>
          <p>How old are you?</p>
          <input type='text'></input>
        </div>
        <div className='question'>
          <p>Are you right-wing or left-wing?</p>
          <input type='text'></input>
        </div>
        <div className='question'>
          <p>Is it pronounced 'zee' or 'zed'?</p>
          <input type='text'></input>
        </div>
        <div className='question'>
          <p>Have you ever played 'catan'?</p>
          <input type='text'></input>
        </div>
        <div className='question'>
          <p>How many languages do you speak?</p>
          <input type='text'></input>
        </div>
        <div className='question'>
          <p>Where were you born?</p>
          <input type='text'></input>
        </div>
        <div className='question'>
          <p>Do you like watermelon?</p>
          <input type='text'></input>
        </div>
        <button className='submit' onClick={onClick}>Submit</button>
      </form>
      <div className='flex-child-q'>
        <img
          className='img-1'
          src={process.env.PUBLIC_URL + 'images/johnson.jpg'}
          alt='Boris Johnson'
        />
        <img
          src={process.env.PUBLIC_URL + 'images/johnson_2.jpg'}
          alt='Boris Johnson'
        />
        <img
          src={process.env.PUBLIC_URL + 'images/johnson_3.jpg'}
          alt='Boris Johnson'
        />
        <img
          src={process.env.PUBLIC_URL + 'images/johnson_4.jpg'}
          alt='Boris Johnson'
        />
                <img
          src={process.env.PUBLIC_URL + 'images/johnson_5.jpg'}
          alt='Boris Johnson'
        />
      </div>
    </div>
  );
};

export default Questions;
