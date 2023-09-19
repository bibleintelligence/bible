import React, { useState } from 'react';
import { Input, Button, Typography } from 'antd';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

function RevelationPage() {
  const [RevelationInput, setRevelationInput] = useState('');
  const [RevelationOutput, setRevelationOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAskButtonClick = async () => {
    setIsLoading(true);
    try {
      const responseRevelation = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`, // Replace with your actual API Key
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: "Based on the Bible Book of Revelation, answer the following as a master Theologian : " + RevelationInput + " (Keep your response to a maximum of 4 sentences)"
            }
          ]
        })
      });

      //console.log("API Key from .env:", process.env.REACT_APP_API_KEY);
      const dataRevelation = await responseRevelation.json();
      let responseTextRevelation = dataRevelation.choices && dataRevelation.choices[0] && dataRevelation.choices[0].message ? dataRevelation.choices[0].message.content.trim() : "";

      setRevelationOutput(responseTextRevelation);





    } catch (error) {
      console.error("There was an error fetching the data:", error);

      setRevelationOutput("The system is unfortunately busy.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Title level={3}>Ask a Theologian a question on the Book of Revelation</Title>
      
      <Input
        placeholder="e.g. Why did the lamb have 7 horns and 7 eyes?"
        value={RevelationInput}
        onChange={e => setRevelationInput(e.target.value)}
        style={{ backgroundColor: 'lightsalmon' }}
      />
      
      <Button type="primary" onClick={handleAskButtonClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Ask"}
      </Button>

      <Title level={5}>Response</Title>
      <TextArea rows={8} value={RevelationOutput} style={{ backgroundColor: 'lightpink' }} readOnly />

    </div>
  );
}

export default RevelationPage;

