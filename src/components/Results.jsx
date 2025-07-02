import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const results = calculateInvestmentResults(input);
  console.log(results);
  return (
    <section className="center">
      <h2>Results</h2>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest Earned</th>
            <th>Annual Investment</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.annualInvestment)}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
