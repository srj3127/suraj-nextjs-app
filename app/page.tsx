import Image from "next/image";

export default function Home() {
  const questions = [
    { question: "1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.", 
    answer: (
      <>
        Favorite Tasks:<br />
        <br />
        Work with the product team to develop new features: I enjoy collaborating with our product team to create new features that improve our platform and meet customer needs.<br />
        <br />
        Create video tutorials: I like creating videos that teach users how to use specific features effectively, making it easier for them to succeed on our platform.<br />
        <br />
        Help train new team members: I find satisfaction in guiding and supporting new team members, ensuring they understand their roles and can provide excellent support to our customers.<br />
        <br />
        Support key customers: I value building strong relationships with our key customers, ensuring they have a positive experience and achieve their goals using our platform.<br />
        <br />
        Engage with multiple users in public forums: I enjoy participating in public discussions where I can help multiple users at once, sharing knowledge and solving problems efficiently.<br />
        <br />
        Least Favorite Tasks:<br />
        <br />
        Respond to 25+ support emails daily: While crucial for customer satisfaction, managing a high volume of emails can be challenging and requires efficient time management to ensure each customer receives prompt and helpful responses.<br />
        <br />
        Scheduling team coverage: Coordinating schedules to ensure adequate support coverage can be complex, but it's essential for team coordination and providing consistent support to our customers.<br />
        <br />
        Analyze support tickets for trends: Identifying patterns in customer issues helps us improve our platform, but it involves meticulous review and can be time-consuming.<br />
        <br />
        Resolve billing issues: Addressing billing inquiries requires attention to detail and navigating through policies to ensure customers' financial interactions with our platform are clear and satisfactory.<br />
        <br />
        Troubleshoot technical issues through logs: Investigating technical issues by examining logs is critical for resolving problems, but it can be challenging without clear error messages and may require deep technical knowledge.
      </>
    ) },
    { question: "2. What do you want to learn or do more of at work?", answer: "I'm eager to deepen my understanding of cloud infrastructure and serverless architectures. Additionally, I aspire to enhance my ability to troubleshoot complex technical issues effectively and communicate solutions clearly to our users." },
    { question: "3. Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?", answer: "In a previous role, I encountered a critical issue where users were experiencing intermittent downtime due to an unforeseen configuration conflict. I systematically reviewed server logs, consulted with our engineering team to identify potential root causes, and implemented a targeted solution based on our findings. I verified the solution's success through rigorous testing and monitoring, ensuring that the issue was fully resolved and users reported stable service thereafter." },
    { question: "4. When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?", answer: "I would choose Edge Functions for modifying HTTP requests and responses at the CDN edge, optimizing performance and user experience. Serverless Functions would be ideal for executing backend logic triggered by events, such as processing form submissions or handling user authentication. Edge Middleware would be suitable for applying common HTTP middleware to requests before they reach the origin server, enhancing security and routing efficiency." },
    { question: "5. Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?", answer: "I would start by requesting specific details about the error messages or symptoms the customer is encountering during the build process. Understanding which framework or technology stack they are using and their project configuration details would be crucial. Additionally, I would ask about recent changes or updates made to their project setup. This information would help me narrow down potential causes and guide further troubleshooting steps effectively." },
    { question: (
    <>
      6. The customer from question 5 replies to your response with the below:<br />
      <br />
      “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.”<br />
      Please write a follow-up reply to the customer.<br />
      <br />
      </>),
    answer: "I understand your frustration and apologize for the difficulties you've experienced. To resolve this issue promptly, could you please provide specific details such as error messages or any steps you've already taken? This information will help us investigate further and find a solution tailored to your needs. Your patience and cooperation are greatly appreciated." },
    { question: 
      (
        <>
          7. A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path to https://example.com?" Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
          <br />
          </>),
     answer: (
      <>
      To redirect the /blog path to https://example.com, you can add the following configuration to your Vercel project's routing settings:<br />
        json
          {`{
            "routes": [
              { "src": "/blog", "dest": "https://example.com", "status": 301 }
            ]
          }`}<br />
          
          This configuration ensures that any requests to /blog will be redirected to the specified URL. If you encounter any issues or need further assistance, please let me know!
      </>
    )
    },
    { question: "8. A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.", answer: "To prevent your site from being indexed by search engines, you can add a robots.txt file to your project with the following content: User-agent: * Disallow: /. This will instruct search engines not to index any pages of your site. If you have any more questions or need additional guidance, feel free to reach out!" },
    { question: "9. What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?", answer: "One of the most common issues customers seek help with is deployment errors, particularly related to custom domain configurations and performance optimizations. To assist customers short-term, I would provide detailed troubleshooting steps and ensure they have access to comprehensive documentation. Long-term, proactive measures such as improving error messaging and enhancing user education through webinars and tutorials would mitigate recurring issues and empower customers to resolve similar challenges independently." },
    { question: "10. How could we improve or alter this familiarisation exercise?", answer: "To enhance this familiarisation exercise, consider integrating practical simulations of escalated support scenarios or customer interactions. Incorporating real-time feedback sessions and debriefs with candidates could provide valuable insights into their problem-solving approach and customer handling skills. Additionally, expanding the exercise to include role-playing sessions with hypothetical customer scenarios would offer a more comprehensive evaluation of candidate readiness for the role." }
  ];

  return (
    <main >
      <div className="max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">The Exercise</h1>
          {questions.map((item, index) => (
            <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">{item.question}</h2>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
    </main>
  );
}
