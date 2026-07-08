const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyseResume = async (base64Pdf) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite'});

  const result = await model.generateContent([
    {
      inlineData: {
        mimeType: 'application/pdf',
        data: base64Pdf
      }
    },
    {
      text: `You are a resume analyser for campus placements. Analyse this resume and return ONLY a JSON object with no extra text, no markdown, no backticks:
{
  "score": <number 0-100>,
  "skills": [<list of technical skills found>],
  "missingSkills": [<important skills missing for software jobs>],
  "strengths": [<3 strong points>],
  "improvements": [<3 specific improvements>],
  "dsaTopics": [<DSA topics the student should focus on>],
  "summary": "<2 line summary of the candidate>"
}`
    }
  ]);

  const text = result.response.text();
  const clean = text.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
};

module.exports = { analyseResume };