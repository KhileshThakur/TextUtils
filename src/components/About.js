import React from 'react'
import '../css/about.css'

function About(props) {
    return (
        <div className="about-page"style={{color: props.mode==="dark"?"white":"Black", background: props.mode==="dark"?"#2d3538":"white"}} >
            <h1 style={{color: props.mode==="dark"?"white":"Black"}}>About Text Util</h1>
            <p className="about-text">
                Welcome to Text Util, your all-in-one text manipulation and analysis tool. Text Util simplifies common text operations and provides valuable insights into your text content. Discover our key features and capabilities below:
            </p>

            <div className="container">
                <div className="left">
                    <h2 style={{color: props.mode==="dark"?"white":"Black"}}>Text Transformation</h2>
                    <p>
                        Text Util offers a range of text transformation options:
                    </p>
                    <ul>
                        <li><strong>Uppercase:</strong> Convert text to uppercase letters.</li>
                        <li><strong>Lowercase:</strong> Convert text to lowercase letters.</li>
                        <li><strong>Camel Case:</strong> Transform text into camelCase format, ideal for programming.</li>
                    </ul>
                </div>
                <div className="right">
                    <h2 style={{color: props.mode==="dark"?"white":"Black"}}>Text Analysis</h2>
                    <p>
                        Gain insights into your text with Text Util's analysis tools:
                    </p>
                    <ul>
                        <li><strong>Word Count:</strong> Count the number of words in your text.</li>
                        <li><strong>Character Count:</strong> Calculate the total character count, including spaces.</li>
                        <li><strong>Reading Time:</strong> Estimate the time required to read the text at an average reading speed.</li>
                    </ul>
                </div>
            </div>



            <div className="how">
                <h2>How to Use</h2>
                <p>
                    Using Text Util is easy and efficient:
                </p>
                <ol>
                    <li>Enter or paste your text into the input area.</li>
                    <li>Choose the transformation or analysis option you desire.</li>
                    <li>Click the "Transform" or "Analyze" button.</li>
                    <li>View the results in the output area.</li>
                </ol>

                <p>
                    Whether you're a writer, developer, or text enthusiast, Text Util is your reliable companion for text-related tasks. It's a versatile tool that streamlines your workflow and enhances your productivity.
                </p>

                <p className="thank-you">
                    Thank you for choosing Text Util. We hope it proves to be a valuable asset in your text endeavors!
                </p>
            </div>
        </div>
    );
}

export default About;
