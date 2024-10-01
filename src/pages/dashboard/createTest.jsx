import styled from "styled-components";
import { useState } from "react";

const Container =  styled.div`
    height: 100vh;
    width: 100%;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
`

const Preview =  styled.div`
    padding: 2%;
    height: 100vh;
    width: 50%;
    background-color: white;
    color: rgb(0, 95, 255);
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    font-weight: 500;
    overflow: scroll;
`

const Form = styled.form`
    padding: 2%;
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    background-color: rgb(0, 95, 255);
    color: white;
    font-family: "Montserrat",sans-serif;
    overflow: scroll;

    & input {
        width: fit-content;
        height: fit-content;
        padding: 2%;
        margin: 5px 0px;
        border: none;
        outline: none;
        border-radius: 20px;
        font-family: "Montserrat",sans-serif;

        

    }

    & button {
        width: fit-content;
        height: fit-content;
        padding: 2%;
        margin: 5px 0px;
        border: none;
        border-radius: 10px;
        font-family: "Montserrat",sans-serif;
        transition: 0.5s ease-in-out;

            &:hover {
                background-color: yellow;
                cursor: pointer;
            }
    }
`
export default function CreateTest() {


    const initialFormData = {
        testName: "",
        questions: [
            {
                title: "",
                options: ["", "", ""],
                correctOption: ""
            }
        ]
    };
    const [formData, setFormData] = useState(initialFormData);
    const [submittedData, setSubmittedData] = useState(null);
//  Final submitted Data function
    const submitHandler = function(e) {
        e.preventDefault();
        const finalData = {
            ...formData,
            title: formData.title,
            questions: formData.questions.filter((el) => {
                return el.options.includes(el.correctOption);
            })
        }
        setSubmittedData(finalData);
    };
//  function for previewing Data before submitting
    const previewData = function() {
        const previewData = {
            ...formData,
            title: formData.title,
            questions: formData.questions.filter((el) => {
                return el.options.includes(el.correctOption);
            })
        }
        setSubmittedData(previewData);
    };
//  Onchange handler for the form
    const onChangeFormData = (event, idx, opIndex = null) => {
        const data = {...formData};
        const {name, value} = event.target;

        if (name === "testName") {
            data[name] = value;
        }
        else if (name === "title" || name === "correctOption") {
            data.questions[idx][name] = value;
        }
        else if (opIndex !== null) {
            data.questions[idx].options[opIndex] = value;
        }
        setFormData(data);
    };

//  Used to add more questions
    const addFormData = () => {
        const newQuestion = 
                {
                    title: "",
                    options: ["", "", ""],
                    correctOption: ""
                }
        
        setFormData((prev) => {
            return {...prev, questions : [...prev.questions, newQuestion]}
        });
    };
//  Used to remove question form
    const removeFormData = function (idx) {
        let removedData = formData.questions.filter((q, index) => index !== idx);
        setFormData((prev) => {
            return {...prev, questions: removedData};
        });
    };

    return (
        <>
            <Container>
                <Form>
                <h1>Create Test</h1>
                <label>Test Name: </label>
                <input type="text" placeholder="Test name" name="testName" value={formData.testName} onChange={e => onChangeFormData(e)}/>
                        {formData.questions.map((data, index) => {
                           return (
                            <>
                                <div style={{display: "flex", flexDirection: "column"}} key={index}>
                                <label>
                                    Question No. {index + 1} 
                                </label>
                                <input type="text" placeholder="Enter Question: .." name="title" value={data.title} onChange={(e) => onChangeFormData(e, index)}/>
                                <label>
                                    Options you should set:
                                </label>
                                    {data.options.map((option, opindx) => {
                                        return (
                                        <div key={opindx}>
                                        <input type="text" placeholder={`option ${opindx + 1}`} name="option1" value={option} onChange={(e) => onChangeFormData(e, index, opindx)}/>
                                        </div>
                                        )
                                    })}
                                
                                <input type="text" placeholder="Correct Option" name="correctOption" value={data.correctOption} onChange={(e) => onChangeFormData(e, index)}/>
                                <button type="button" onClick={addFormData}>Add More..</button>
                                <button type="button" onClick={() => removeFormData(index)}>Remove</button>
                                </div>
                            </>
                           ) 
                        })}
                        <button type="button" onClick={previewData}>Preview</button>
                        <button type="submit" onClick={submitHandler}>Submit</button>
                </Form>
                <Preview>
                    <h1>Preview Test</h1>
                    {submittedData && submittedData.questions.map((item, index) => {
                        return (
                        <div key={index}>    
                        <label>{item.title}</label>
                            {item.options.map((itm, indx) => {
                                return (
                                    <div key={indx}>
                                        <input type="radio" name={item.correctOption}/>
                                        <label>{itm}</label>
                                    </div>
                                )
                            })}
                        </div>
                        )
                    }
                )}
                </Preview>
            </Container>
        </>
    )
};