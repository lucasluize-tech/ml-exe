import "./MadlibsForm.css";

const MadlibsForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <form className='madlibs-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='noun'
        id='noun'
        placeholder='noun'
        onChange={handleChange}
        value={data.noun}
      />
      <input
        type='text'
        name='noun2'
        id='noun2'
        placeholder='noun2'
        onChange={handleChange}
        value={data.noun2}
      />
      <input
        type='text'
        name='adjective'
        id='adjective'
        placeholder='adjective'
        onChange={handleChange}
        value={data.adjective}
      />
      <input
        type='text'
        name='color'
        id='color'
        placeholder='color'
        onChange={handleChange}
        value={data.color}
      />
      <button id='btnSubmit' type='submit'>
        Get Story
      </button>
    </form>
  );
};

export default MadlibsForm;
