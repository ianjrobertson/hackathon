import { useState } from "react";
import { SurveyGenerator } from "./surveyGenerator";

export default function Survey() {
  const survey = new SurveyGenerator().getQuestions();

  const [responses, setResponses] = useState({}); // Store user inputs

  const handleChange = (category, index, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [`${category}-${index}`]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Responses:", responses);
    alert("Responses submitted! Check the console.");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='max-w-lg mx-auto bg-secondary text-primary p-4 border rounded-lg shadow-lg m-3'
      >
        <h2 className='text-2xl font-bold text-center mb-4'>Personality Quiz</h2>

        {survey.map((categoryData, categoryIndex) => (
          <div key={categoryIndex} className='mb-10'>
            <h2 className='mb-2 text-center'>{categoryData.category}</h2>
            {categoryData.items.map((question, questionIndex) => (
              <div key={questionIndex} className=' mb-4'>
                <p>{question}</p>
                <div className='flex gap-2 items-center justify-center'>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <label key={num} className='inline-flex items-center gap-1 cursor-pointer'>
                      <input
                        type='radio'
                        name={`q${categoryIndex}-${questionIndex}`}
                        value={num}
                        onChange={(event) => handleChange(categoryData.category, questionIndex, event.target.value)}
                        className='hidden'
                      />
                      <span
                        className={`px-3 py-1 border rounded-full ${responses[`${categoryData.category}-${questionIndex}`] === String(num)
                            ? "bg-primary text-accent"
                            : "bg-accent hover:bg-gray-300"
                          }`}
                      >
                        {num}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        <button type='submit' className='mt-4 w-full bg-primary text-secondary py-2 rounded-lg hover:bg-neutral'>
          Submit
        </button>
      </form>
    </>
  );
}
