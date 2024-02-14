"use server"

import axios from "axios";

export async function summaryEdenAi(transcript: string) {
  console.log(transcript);
  // let PromptText = `Generate summary notes based on the provided text input. Summarize the content into organized bullet points, highlighting key ideas, concepts, and relevant details. Ensure each bullet point is clear, succinct, and captures a distinct piece of information. you can divide each points by '\n-' ${transcript}`;
  const PromptText=`Summarize the transcript in paragraph format with better wordings.
  ${transcript}`
  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/text/summarize",
    headers: {
      authorization: `Bearer ${process.env.EDENAI_API_KEY}`,
    },
    data: {
      output_sentences: 6,
      providers: "openai",
      text: PromptText,
      language: "en",
      fallback_providers: "",
    },
  };
  let resp= axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      return response?.data?.openai;
    })
    .catch((error) => {
      console.error(error);
    });
    return resp;
}
