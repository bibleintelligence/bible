import React, { useState } from 'react';
import { Input, Button, Typography } from 'antd';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

function PastorPage() {
  const [pastorInput, setPastorInput] = useState('');
  const [pastorOutput, setPastorOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAskButtonClick = async () => {
    setIsLoading(true);
    try {
      const responsePastor = await fetch('https://api.openai.com/v1/chat/completions', {
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
              content: "Answer the following as a modern and progressive Christian Pastor, (don't include in your answer that you are a wise and loving Christian pastor, just answer): " + pastorInput + " (Keep your response to a maximum of 4 sentences)"
            }
          ]
        })
      });

      //console.log("API Key from .env:", process.env.REACT_APP_API_KEY);
      const dataPastor = await responsePastor.json();
      let responseTextPastor = dataPastor.choices && dataPastor.choices[0] && dataPastor.choices[0].message ? dataPastor.choices[0].message.content.trim() : "";

      setPastorOutput(responseTextPastor);





    } catch (error) {
      console.error("There was an error fetching the data:", error);

      setPastorOutput("The Pastor is unfortunately busy.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Title level={3}>Ask a Pastor anything</Title>
      
      <Input
        placeholder="e.g. Who was Elijah?"
        value={pastorInput}
        onChange={e => setPastorInput(e.target.value)}
        style={{ backgroundColor: 'lightgreen' }}
      />
      
      <Button type="primary" onClick={handleAskButtonClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Ask"}
      </Button>

      <Title level={5}>Response</Title>
      <TextArea rows={8} value={pastorOutput} style={{ backgroundColor: 'lightgrey' }} readOnly />

    </div>
  );
}

export default PastorPage;

