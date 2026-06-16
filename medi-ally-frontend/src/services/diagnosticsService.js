import { delay } from '../utils/helpers';

/** Mock diagnostics service */
const diagnosticsService = {
  analyzeReport: async (file) => {
    await delay(3000);
    const isBloodReport = file?.name?.toLowerCase().includes('blood') || true;
    return {
      reportType: isBloodReport ? 'Blood Report (CBC)' : 'General Report',
      patientName: 'Patient',
      date: new Date().toLocaleDateString(),
      condition: 'Mild Iron Deficiency Anemia',
      riskLevel: 'medium',
      summary: 'The report indicates slightly low hemoglobin levels and reduced iron markers. Most other parameters are within normal range.',
      abnormalValues: [
        { parameter: 'Hemoglobin', value: '11.2 g/dL', normalRange: '12-16 g/dL', status: 'Low' },
        { parameter: 'Serum Iron', value: '45 µg/dL', normalRange: '60-170 µg/dL', status: 'Low' },
        { parameter: 'Ferritin', value: '10 ng/mL', normalRange: '12-150 ng/mL', status: 'Low' },
        { parameter: 'RBC Count', value: '4.0 M/µL', normalRange: '4.5-5.5 M/µL', status: 'Low' },
        { parameter: 'WBC Count', value: '7,500 /µL', normalRange: '4,500-11,000 /µL', status: 'Normal' },
        { parameter: 'Platelets', value: '250,000 /µL', normalRange: '150,000-400,000 /µL', status: 'Normal' },
      ],
      recommendations: [
        'Include iron-rich foods like spinach, lentils, and red meat in your diet',
        'Take Vitamin C to improve iron absorption',
        'Consider iron supplements after consulting your doctor',
        'Follow up with a complete iron profile test in 3 months',
        'Avoid tea/coffee with meals as they reduce iron absorption',
      ],
      simpleExplanation: 'Your blood test shows that your iron levels and hemoglobin are slightly below normal. This means your blood has fewer red blood cells than ideal, which might make you feel tired or weak. This is a common condition and can usually be improved with dietary changes and supplements.',
    };
  },
};

export default diagnosticsService;
