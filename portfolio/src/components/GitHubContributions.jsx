/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
// import { subDays, format } from 'date-fns';
import { subDays } from 'date-fns';
import axios from 'axios';
import '../../styles/GitHubContributions.css';

const getGithubContributions = async (username) => {
  const response = await axios.get(`https://github-contributions-api.jogruber.de/v4/${username}`);
  return response.data.contributions;
};

const GitHubContributions = ({ username = 'hennyfeliz' }) => {
  const [contributions, setContributions] = useState([]);
  const [year, setYear] = useState('last_year');

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const contributionsData = await getGithubContributions(username);
        setContributions(contributionsData);
      } catch (error) {
        console.error('Error fetching GitHub contributions', error);
      }
    };

    fetchContributions();
  }, [username]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const getStartDate = () => {
    if (year === 'last_year') {
      return subDays(new Date(), 365);
    } else {
      return new Date(year, 0, 1);
    }
  };

  const getEndDate = () => {
    if (year === 'last_year') {
      return new Date();
    } else {
      return new Date(year, 11, 31);
    }
  };

  return (
    <div className="github-contributions">
      <div className='name-github-container'>
        <span>{username}&apos;s GitHub Contributions</span>
        <select onChange={handleYearChange} className='select_' value={year}>
          <option value="last_year">Last year</option>
          {[...Array(10)].map((_, i) => {
            const yearOption = new Date().getFullYear() - i;
            return (
              <option key={yearOption} value={yearOption}>
                {yearOption}
              </option>
            );
          })}
        </select>
      </div>
      <CalendarHeatmap
        startDate={getStartDate()}
        endDate={getEndDate()}
        values={contributions}
        classForValue={
          (value) => {
            return !value ? 'color-empty' : `color-scale-${Math.min(value.count, 4)}`;
          }}
        tooltipDataAttrs={value => {
          return {
            'data-tip': value.date ? `${value.date} has ${value.count} contributions` : 'No contributions'
          };
        }}
        showWeekdayLabels
      />
    </div>
  );
};

export default GitHubContributions;



// /* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react';
// import CalendarHeatmap from 'react-calendar-heatmap';
// import 'react-calendar-heatmap/dist/styles.css';
// import { addDays, format } from 'date-fns';
// import axios from 'axios';
// import '../styles/GitHubContributions.css';

// const getGithubContributions = async (username, year) => {
//   const response = await axios.get(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`);
//   return response.data.contributions;
// };

// const GitHubContributions = ({ username = 'hennyfeliz' }) => {
//   const [contributions, setContributions] = useState([]);
//   const [year, setYear] = useState(new Date().getFullYear());

//   useEffect(() => {
//     const fetchContributions = async () => {
//       try {
//         const contributionsData = await getGithubContributions(username, year);
//         setContributions(contributionsData);
//       } catch (error) {
//         console.error('Error fetching GitHub contributions', error);
//       }
//     };

//     fetchContributions();
//   }, [username, year]);

//   const handleYearChange = (event) => {
//     setYear(event.target.value);
//   };

//   return (
//     <div className="github-contributions">
//       <div className='name-github-container'>
//         <h2>{username}&apos;s GitHub Contributions</h2>
//         <select onChange={handleYearChange} className='select_' value={year}>
//           {[...Array(10)].map((_, i) => {
//             const yearOption = new Date().getFullYear() - i;
//             return (
//               <option key={yearOption} value={yearOption}>
//                 {yearOption}
//               </option>
//             );
//           })}
//         </select>
//       </div>
//       <CalendarHeatmap
//         startDate={new Date(year, 0, 1)}
//         endDate={new Date(year, 11, 31)}
//         values={contributions}
//         classForValue={(value) => {
//           if (!value) {
//             return 'color-empty';
//           }
//           return `color-scale-${Math.min(value.count, 4)}`;
//         }}
//         tooltipDataAttrs={value => {
//           return {
//             'data-tip': value.date ? `${value.date} has ${value.count} contributions` : 'No contributions'
//           };
//         }}
//         showWeekdayLabels
//       />
//     </div>
//   );
// };

// export default GitHubContributions;