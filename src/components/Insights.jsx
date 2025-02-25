import React from 'react';
import "../style/Insights.css";

const Insights = () => {
  const insights = [
    {
      title: 'Start Your Day with Intention',
      emoji: '🌅',
      description:
        'Begin each day by setting a positive intention. Starting with purpose helps guide your mood and actions.',
    },
    {
      title: 'Journaling for Clarity',
      emoji: '📓',
      description:
        'Take 5 minutes to journal your thoughts. Writing helps process emotions and gain mental clarity.',
    },
    {
      title: 'Mindful Breathing',
      emoji: '🌬️',
      description:
        'Pause for 1-2 minutes of deep breathing to calm your mind. Inhale for 4 seconds, hold for 4, and exhale for 6.',
    },
    {
      title: 'Set Realistic Goals',
      emoji: '🎯',
      description:
        'Break down big goals into smaller, manageable tasks. Achieve small wins and build momentum.',
    },
    {
      title: 'Embrace Self-Compassion',
      emoji: '💖',
      description:
        'Be kind to yourself, especially when you face setbacks. Self-compassion builds resilience.',
    },
    {
      title: 'The Power of Saying No',
      emoji: '🚫',
      description:
        'Set boundaries and say no to things that drain your energy. Protect your mental health.',
    },
    {
      title: 'Stay Active for Mental Clarity',
      emoji: '🏃‍♀️',
      description:
        'Exercise doesn’t need to be intense. A walk or stretch can help clear your mind and boost your mood.',
    },
    {
      title: 'Rest and Recharge',
      emoji: '💤',
      description:
        'Prioritize rest. Adequate sleep and short breaks throughout the day can help you stay balanced.',
    },
    {
      title: 'Gratitude Practice',
      emoji: '🙏',
      description:
        'End your day by listing three things you’re grateful for. A gratitude practice promotes positivity.',
    },
    {
      title: 'Connect with Others',
      emoji: '🤝',
      description:
        'Reach out to friends or family. Social connection can help reduce stress and improve emotional well-being.',
    },
  ];

  return (
    <div className="insights-container">
      <h1>Mental Health Insights 💡</h1>
      <ul className="insights-list">
        {insights.map((insight, index) => (
          <li key={index} className="insight-item">
            <span className="insight-emoji">{insight.emoji}</span>
            <div className="insight-content">
              <h2>{insight.title}</h2>
              <p>{insight.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Insights;
