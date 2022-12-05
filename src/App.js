import ReactECharts from 'echarts-for-react';
import './App.css';
function App() {

  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
    xAxis: {
      type: "category",
      data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
      // removes grid-lines in x-axis
      splitLine:{show:false}
    },
    yAxis: {
      type: "value",
      data: [300, 400, 500, 600, 700],
      // removes grid-lines in y-axis
      splitLine:{show:false},
    },
    series: [
      {
        data: [400, 300, 350, 200, 280],
        type: "bar",
        smooth: true
      }
    ],
    tooltip: {
      // trigger object shows dashedLine vertically
      // trigger: "axis"
    }
  }
  return (
    <div className="w-full h-[100vh] bg-slate-400 flex flex-col justify-center items-center">
      <div className='bg-white'>
      <ReactECharts
      style={{width:'900px',height:'600px'}}
      option={options}
      // notMerge={true}
      // lazyUpdate={true}
      // theme={"theme_name"}
      // onChartReady={this.onChartReadyCallback}
      // onEvents={EventsDict}
      // opts={}
       />
      </div>
    </div>
  );
}

export default App;
