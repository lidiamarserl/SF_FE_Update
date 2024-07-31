import * as React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";


const datasoil = [

	//SM
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "611f7d7f4750382956b468e4",
		elementId: "kemaraur1",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "611f7d7f4750382956b468e4",
		elementId: "hujanr1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "611f7d7f4750382956b468e4",
		elementId: "manualr1",
	},

	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "61305378590b802f53935e9a",
		elementId: "kemaraur2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "61305378590b802f53935e9a",
		elementId: "hujanr2",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "61305378590b802f53935e9a",
		elementId: "manualr2",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "6130523e590b802f53935e99",
		elementId: "kemaraur3",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6130523e590b802f53935e99",
		elementId: "hujanr3",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6130523e590b802f53935e99",
		elementId: "manualr3",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "618f89476941b53a5d35606f",
		elementId: "kemaraur4",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "618f89476941b53a5d35606f",
		elementId: "hujanr4",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "618f89476941b53a5d35606f",
		elementId: "manualr4",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "61910bcfd2cd6b06225ee0ca",
		elementId: "kemaraur5",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "61910bcfd2cd6b06225ee0ca",
		elementId: "hujanr5",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "61910bcfd2cd6b06225ee0ca",
		elementId: "manualr5",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "618dc5c2553f46dc235bcfed",
		elementId: "kemaraur6",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "618dc5c2553f46dc235bcfed",
		elementId: "hujanr6",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "618dc5c2553f46dc235bcfed",
		elementId: "manualr6",
	},

	//sensor lainnya
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8275a0c89673d266100",
		elementId: "sensorn1",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8275a0c89673d266100",
		elementId: "sensorn2",
	},
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8465a0c89673d266101",
		elementId: "sensorp1",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8465a0c89673d266101",
		elementId: "sensorp2",
	},
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8505a0c89673d266102",
		elementId: "sensork1",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8505a0c89673d266102",
		elementId: "sensork2",
	},
		{
		device_id: "D8fRCvhyRWUNtzfWuhbdb9q5azNkrE4g",
		index_id: "618bce88109f491b98e68b59",
		elementId: "sensorph1",
		sensor_name: "PH1"
	},
	{
		device_id: "lWwWZ7RHI5HToRocg122mLHgmqKsT7F7",
		index_id: "618bce88109f491b98e68b59",
		elementId: "sensorph2",
		sensor_name: "PH2"
	},
	{
		device_id: "BngyuCFVukyQakpJyBug4WubAdpnt2g5",
		index_id: "6142a70446514f50ff8ed6a8",
		elementId: "sensorst1",
		sensor_name: "ST1"
	},
	{
		device_id: "J3c6xgg64gyL8pJ5uCZw69Ec4FJBj97R",
		index_id: "6142a70446514f50ff8ed6a8",
		elementId: "sensorst2",
		sensor_name: "ST1"
	},
	{
		device_id: "AMJ6RHSdwf4XMv2dhPRh8hxnE92exg7U",
		index_id: "638d8677245a8f9cc00b4bcc",
		elementId: "sensordht",
		sensor_name: "DHT"
	},
	{
		device_id: "fPMkkgECQndBCs7eFtha09uy57Qv8Xks",
		index_id: "6129bfebdb963d1d1eaac307",
		elementId: "sensortds1",
		sensor_name: "tds1"
	},
	{
		device_id: "wqZeXsBhFSL6CLzfaUjJsnavudV3WvL7",
		index_id: "6129bfebdb963d1d1eaac307",
		elementId: "sensortds2",
		sensor_name: "tds2"
	},
];

const datasetsB = [
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "65792115cc701ed1363c640f",
		elementId: "khaliwaktu",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "65792115cc701ed1363c640f",
		elementId: "khalipersen",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8465a0c89673d266101",
		elementId: "musan1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8275a0c89673d266100",
		elementId: "musap1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8505a0c89673d266102",
		elementId: "musak1",
	},
		{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8465a0c89673d266101",
		elementId: "musan2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8275a0c89673d266100",
		elementId: "musap2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8505a0c89673d266102",
		elementId: "musak2",
	},

	//iryna
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8465a0c89673d266101",
		elementId: "irynan1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8275a0c89673d266100",
		elementId: "irynap1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8505a0c89673d266102",
		elementId: "irynak1",
	},

	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8465a0c89673d266101",
		elementId: "irynan2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8275a0c89673d266100",
		elementId: "irynap2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8505a0c89673d266102",
		elementId: "irynak2",
	},
];


//nanti ini buat menampillkan anomaly detection
const datasetsC = [
// 	{
// 		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
// 		index_id: "611f7d7f4750382956b468e4",
// 		elementId: "SM_C3R1",
// 	},
// 	{
// 		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
// 		index_id: "611f7d7f4750382956b468e4",
// 		elementId: "SM_C2R1",
// 	},
// 	{
// 		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
// 		index_id: "611f7d7f4750382956b468e4",
// 		elementId: "SM_C1R1",
// 	},

// 	{
// 		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
// 		index_id: "61305378590b802f53935e9a",
// 		elementId: "SM_C3R2",
// 	},
// 	{
// 		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
// 		index_id: "61305378590b802f53935e9a",
// 		elementId: "SM_C2R2",
// 	},
// 	{
// 		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
// 		index_id: "61305378590b802f53935e9a",
// 		elementId: "SM_C1R2",
// 	},
// 	{
// 		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
// 		index_id: "6130523e590b802f53935e99",
// 		elementId: "SM_C3R3",
// 	},
// 	{
// 		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
// 		index_id: "6130523e590b802f53935e99",
// 		elementId: "SM_C2R3",
// 	},
// 	{
// 		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
// 		index_id: "6130523e590b802f53935e99",
// 		elementId: "SM_C1R3",
// 	},
// 	{
// 		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
// 		index_id: "618f89476941b53a5d35606f",
// 		elementId: "SM_C3R4",
// 	},
// 	{
// 		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
// 		index_id: "618f89476941b53a5d35606f",
// 		elementId: "SM_C2R4",
// 	},
// 	{
// 		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
// 		index_id: "618f89476941b53a5d35606f",
// 		elementId: "SM_C1R4",
// 	},
// 	{
// 		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
// 		index_id: "61910bcfd2cd6b06225ee0ca",
// 		elementId: "SM_C3R5",
// 	},
// 	{
// 		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
// 		index_id: "61910bcfd2cd6b06225ee0ca",
// 		elementId: "SM_C2R5",
// 	},
// 	{
// 		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
// 		index_id: "61910bcfd2cd6b06225ee0ca",
// 		elementId: "SM_C1R5",
// 	},
// 	{
// 		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
// 		index_id: "618dc5c2553f46dc235bcfed",
// 		elementId: "SM_C3R6",
// 	},
// 	{
// 		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
// 		index_id: "618dc5c2553f46dc235bcfed",
// 		elementId: "SM_C2R6",
// 	},
// 	{
// 		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
// 		index_id: "618dc5c2553f46dc235bcfed",
// 		elementId: "SM_C1R6",
// 	},

// 	//sensor lainnya
// 	{
// 		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
// 		index_id: "6280a8275a0c89673d266100",
// 		elementId: "NPK1",
// 	},
// 	{
// 		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
// 		index_id: "6280a8465a0c89673d266101",
// 		elementId: "NPK2",
// 	},
// 	{
// 		device_id: "D8fRCvhyRWUNtzfWuhbdb9q5azNkrE4g",
// 		index_id: "618bce88109f491b98e68b59",
// 		elementId: "PH1A",
// 	},
// 	{
// 		device_id: "lWwWZ7RHI5HToRocg122mLHgmqKsT7F7",
// 		index_id: "618bce88109f491b98e68b59",
// 		elementId: "PH2A",
// 	},
// 	{
// 		device_id: "BngyuCFVukyQakpJyBug4WubAdpnt2g5",
// 		index_id: "6142a70446514f50ff8ed6a8",
// 		elementId: "ST1A",
// 	},
// 	{
// 		device_id: "J3c6xgg64gyL8pJ5uCZw69Ec4FJBj97R",
// 		index_id: "6142a70446514f50ff8ed6a8",
// 		elementId: "ST2A",
// 	},
// 	{
// 		device_id: "AMJ6RHSdwf4XMv2dhPRh8hxnE92exg7U",
// 		index_id: "638d8677245a8f9cc00b4bcc",
// 		elementId: "DHT1",
// 	},
// 	{
// 		device_id: "fPMkkgECQndBCs7eFtha09uy57Qv8Xks",
// 		index_id: "6129bfebdb963d1d1eaac307",
// 		elementId: "TDS1A",
// 	},
// 	{
// 		device_id: "wqZeXsBhFSL6CLzfaUjJsnavudV3WvL7",
// 		index_id: "6129bfebdb963d1d1eaac307",
// 		elementId: "TDS2A",
// 	},

    {
		sensor_name: "SM_C3R1",
		elementId: "SM_C3R1",
	},
	{
		sensor_name: "SM_C2R1",
		elementId: "SM_C2R1",
	},
	{
		sensor_name: "SM_C1R2",
		elementId: "SM_C1R1",
	},
	{
		sensor_name: "SM_C3R2",
		elementId: "SM_C3R2",
	},
	{
		sensor_name: "SM_C2R2",
		elementId: "SM_C2R2",
	},
	{
		sensor_name: "SM_C1R2",
		elementId: "SM_C1R2",
	},
	{
		sensor_name: "SM_C3R3",
		elementId: "SM_C3R3",
	},
	{
		sensor_name: "SM_C2R3",
		elementId: "SM_C2R3",
	},
	{
		sensor_name: "SM_C1R3",
		elementId: "SM_C1R3",
	},
	{
		sensor_name: "SM_C3R4",
		elementId: "SM_C3R4",
	},
	{
		sensor_name: "SM_C2R4",
		elementId: "SM_C2R4",
	},
	{
		sensor_name: "SM_C1R4",
		elementId: "SM_C1R4",
	},
	{
		sensor_name: "SM_C3R5",
		elementId: "SM_C3R5",
	},
	{
		sensor_name: "SM_C2R5",
		elementId: "SM_C2R5",
	},
	{
		sensor_name: "SM_C1R5",
		elementId: "SM_C1R5",
	},
	{
		sensor_name: "SM_C3R6",
		elementId: "SM_C3R6",
	},
	{
		sensor_name: "SM_C2R6",
		elementId: "SM_C2R6",
	},
	{
		sensor_name: "SM_C1R6",
		elementId: "SM_C1R6",
	},

	//sensor lainnya
	{
		sensor_name: "NPK1",
		elementId: "NPK1",
	},
	{
		sensor_name: "NPK2",
		elementId: "NPK2",
	},
	{
		sensor_name: "PH1",
		elementId: "PH1A",
	},
	{
		sensor_name: "PH2",
		elementId: "PH2A",
	},
	{
		sensor_name: "ST1",
		elementId: "ST1A",
	},
	{
		sensor_name: "ST2",
		elementId: "ST2A",
	},
	{
		sensor_name: "DHT",
		elementId: "DHT1",
	},
// 	{
// 		device_id: "fPMkkgECQndBCs7eFtha09uy57Qv8Xks",
// 		index_id: "6129bfebdb963d1d1eaac307",
// 		elementId: "TDS1A",
// 	},
// 	{
// 		device_id: "wqZeXsBhFSL6CLzfaUjJsnavudV3WvL7",
// 		index_id: "6129bfebdb963d1d1eaac307",
// 		elementId: "TDS2A",
// 	},
    
];

function App() {

	const [soil, setSoil] = React.useState({
		kemaraur1: null,
		hujanr1: null,
		manualr1: null,
		kemaraur2: null,
		hujanr2: null,
		manualr2: null,
		kemaraur3: null,
		hujanr3: null,
		manualr3: null,
		kemaraur4: null,
		hujanr4: null,
		manualr4: null,
		kemaraur5: null,
		hujanr5: null,
		manualr5: null,
		kemaraur6: null,
		hujanr6: null,
		manualr6: null,

		//sensor lain
		sensorn1: null,
		sensorn2: null,
		sensorp1: null,
		sensorp2: null,
		sensork1: null,
		sensork2: null,
		sensorph1: null,
		sensorph2: null,
		sensorst1: null,
		sensorst2: null,
		sensordht: null,
		sensortds1: null,
		sensortds2: null,

	});

	const [dataB, setDataB] = React.useState({
	    khaliwaktu: [],
	    khalipersen: [],
	    musan1: [],
	    musap1: [],
	    musak1: [],
	    musan2: [],
	    musap2: [],
	    musak2: [],
	    irynan1: [],
	    irynap1: [],
	    irynak1: [],
	    irynan2: [],
	    irynap2: [],
	    irynak2: [],

	});
	
	//ini nanti buat anomaly
	const [dataC, setDataC] = React.useState({
		SM_C3R1: null,
		SM_C2R1: null,
// 		SM_C1R1: null,
		SM_C3R2: null,
		SM_C2R2: null,
		SM_C1R2: null,
		SM_C3R3: null,
		SM_C2R3: null,
		SM_C1R3: null,
		SM_C3R4: null,
		SM_C2R4: null,
		SM_C1R4: null,
		SM_C3R5: null,
		SM_C2R5: null,
		SM_C1R5: null,
		SM_C3R6: null,
		SM_C2R6: null,
		SM_C1R6: null,
		//sensor lain
		NPK1: null,
		NPK2: null,
		PH1A: null,
		PH2A: null,
		ST1A: null,
		ST2A: null,
		DHTA: null,
// 		TDS1A: null,
// 		TDS2A: null,

	});
	
	
// 	const [musan1ChartData, setMusan1ChartData] = React.useState([]);
// 	const [musap1ChartData, setMusap1ChartData] = React.useState([]);
// 	const [musak1ChartData, setMusak1ChartData] = React.useState([]);
	
	
	const [SM_C1R1Chart, setSM_C1R1Chart] = React.useState([]);
	const [SM_C1R2Chart, setSM_C1R2Chart] = React.useState([]);
	const [SM_C1R3Chart, setSM_C1R3Chart] = React.useState([]);
	const [SM_C1R4Chart, setSM_C1R4Chart] = React.useState([]);
	const [SM_C1R5Chart, setSM_C1R5Chart] = React.useState([]);
	const [SM_C1R6Chart, setSM_C1R6Chart] = React.useState([]);
	
	const [SM_C2R1Chart, setSM_C2R1Chart] = React.useState([]);
	const [SM_C2R2Chart, setSM_C2R2Chart] = React.useState([]);
	const [SM_C2R3Chart, setSM_C2R3Chart] = React.useState([]);
	const [SM_C2R4Chart, setSM_C2R4Chart] = React.useState([]);
	const [SM_C2R5Chart, setSM_C2R5Chart] = React.useState([]);
	const [SM_C2R6Chart, setSM_C2R6Chart] = React.useState([]);
	
	const [SM_C3R1Chart, setSM_C3R1Chart] = React.useState([]);
	const [SM_C3R2Chart, setSM_C3R2Chart] = React.useState([]);
	const [SM_C3R3Chart, setSM_C3R3Chart] = React.useState([]);
	const [SM_C3R4Chart, setSM_C3R4Chart] = React.useState([]);
	const [SM_C3R5Chart, setSM_C3R5Chart] = React.useState([]);
	const [SM_C3R6Chart, setSM_C3R6Chart] = React.useState([]);

	const [NPK1Chart, setNPK1Chart] = React.useState([]);
	const [NPK2Chart, setNPK2Chart] = React.useState([]);	
	const [PH1Chart, setPH1Chart] = React.useState([]);
	const [PH2Chart, setPH2Chart] = React.useState([]);
	const [ST1Chart, setST1Chart] = React.useState([]);
	const [ST2Chart, setST2Chart] = React.useState([]);
	const [DHTChart, setDHTChart] = React.useState([]);


	React.useEffect(() => {
		datasoil.forEach((dtsoil) => {
			console.log("dtsoil", dtsoil);
			axios
				.get("https://api.sf2.ctailab.com/datalist", {
					params: {
						device_id: dtsoil.device_id,
						index_id: dtsoil.index_id,
					},
				})
				.then((res) => {
					console.log("res soil", res.data[0]);
					setSoil((prevState) => ({
						...prevState,
						[dtsoil.elementId]: res?.data[0] || "No data",
					}));
				})
				.catch((err) => {
					console.log("error => ", err);
				});
		});

		datasetsB.forEach((datasetB) => {
			console.log("datasetB", datasetB);
			axios
				.get("https://api.sf2.ctailab.com/datalist", {
					params: {
						device_id: datasetB.device_id,
						index_id: datasetB.index_id,
						},
					})
				.then((res) => {
					setDataB((prevState) => ({
						...prevState,
						[datasetB.elementId]: res.data || [],
						}));
						
				// 	if (datasetB.elementId === "musan1"){
				// 	    setMusan1ChartData(res.data);
				// 	} else if (datasetB.elementId === "musap1"){
				// 	    setMusap1ChartData(res.data)
				// 	} else if (datasetB.elementId === "musak1"){
				// 	    setMusak1ChartData(res.data)
				// 	}
					
					})
				.catch((err) => {
					console.log("error => ", err);
				});
		});
		
// 	}, []);
	
	
	
		datasetsC.forEach((datasetC) => {
			console.log("datasetC", datasetC);
			axios
				.get("https://api.sf2.ctailab.com/anomalyDetection", {
					params: {
				// 		device_id: datasetC.device_id,
				// 		index_id: datasetC.index_id,
						sensor_name: datasetC.sensor_name,
						},
					})
				.then((res) => {
					setDataC((prevState) => ({
						...prevState,
						[datasetC.elementId]: res.data || [],
						}));
						
					if (datasetC.elementId === "SM_C1R2"){
					    setSM_C1R1Chart(res.data);
					} else if (datasetC.elementId === "SM_C1R2"){
					    setSM_C1R2Chart(res.data);
					} else if (datasetC.elementId === "SM_C1R3"){
					    setSM_C1R3Chart(res.data);
					} else if (datasetC.elementId === "SM_C1R4"){
					    setSM_C1R4Chart(res.data);
					} else if (datasetC.elementId === "SM_C1R5"){
					    setSM_C1R5Chart(res.data);
					} else if (datasetC.elementId === "SM_C1R6"){
					    setSM_C1R6Chart(res.data);
					} else if (datasetC.elementId === "SM_C2R1"){
					    setSM_C2R1Chart(res.data);
					} else if (datasetC.elementId === "SM_C2R2"){
					    setSM_C2R2Chart(res.data);
					} else if (datasetC.elementId === "SM_C2R3"){
					    setSM_C2R3Chart(res.data);
					} else if (datasetC.elementId === "SM_C2R4"){
					    setSM_C2R4Chart(res.data);
					} else if (datasetC.elementId === "SM_C2R5"){
					    setSM_C2R5Chart(res.data);
					} else if (datasetC.elementId === "SM_C2R6"){
					    setSM_C2R6Chart(res.data);
					} else if (datasetC.elementId === "SM_C3R1"){
					    setSM_C3R1Chart(res.data);
					} else if (datasetC.elementId === "SM_C3R2"){
					    setSM_C3R2Chart(res.data);
					} else if (datasetC.elementId === "SM_C3R3"){
					    setSM_C3R3Chart(res.data);
					} else if (datasetC.elementId === "SM_C3R4"){
					    setSM_C3R4Chart(res.data);
					} else if (datasetC.elementId === "SM_C3R5"){
					    setSM_C3R5Chart(res.data);
					} else if (datasetC.elementId === "SM_C3R6"){
					    setSM_C3R6Chart(res.data);
					} else if (datasetC.elementId === "NPK1"){
					    setNPK1Chart(res.data);
					} else if (datasetC.elementId === "NPK2"){
					    setNPK2Chart(res.data);
					} else if (datasetC.elementId === "PH1A"){
					    setPH1Chart(res.data);
					} else if (datasetC.elementId === "PH2A"){
					    setPH2Chart(res.data);
					} else if (datasetC.elementId === "DHTA"){
					    setDHTChart(res.data);
					} else if (datasetC.elementId === "ST1A"){
					    setST1Chart(res.data);
					} else if (datasetC.elementId === "ST2A"){
					    setST2Chart(res.data);
					} 
					})
				.catch((err) => {
					console.log("error => ", err);
					});
			});
		
	}, []);
	
	
	
// 	const chartData = {
// 	    labels: SM_C1R1Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
// 	    datasets: [
// 	        {
// 	            label: "R1 Manual",
// 	            data: SM_C1R1Chart.map((item) => item.anomaly),
// 	            fill: false,
// 	            backgroundColor: "rgba(75,192,192,1)",
// 	            borderColor: "rgba(75,192,192,1)",
	            
// 	        },
// 	        {
// 	            label: "R2 Manual",
// 	            data: SM_C1R2Chart.map((item) => item.anomaly),
// 	            fill: false,
// 	            backgroundColor: "rgba(255,99,132,1)",
// 	            borderColor: "rgba(255,99,132,1)",
	            
// 	        },
// 	        {
// 	            label: "R3 Manual",
// 	            data: SM_C1R3Chart.map((item) => item.anomaly),
// 	            fill: false,
// 	            backgroundColor: "rgba(54,162,235,1)",
// 	            borderColor: "rgba(54,162,235,1)",
	            
// 	        },
// 	        {
// 	            label: "R4 Manual",
// 	            data: SM_C1R4Chart.map((item) => item.anomaly),
// 	            fill: false,
// 	            backgroundColor: "rgba(255, 206, 86, 1)",
// 	            borderColor: "rgba(255, 206, 86, 1)",
	            
// 	        },
// 	        {
// 	            label: "R5 Manual",
// 	            data: SM_C1R5Chart.map((item) => item.anomaly),
// 	            fill: false,
// 	            backgroundColor: "rgba(153, 102, 255, 1)",
// 	            borderColor: "rgba(153, 102, 255, 1)",
	            
// 	        },
// 	        {
// 	            label: "R6 Manual",
// 	            data: SM_C1R6Chart.map((item) => item.anomaly),
// 	            fill: false,
// 	            backgroundColor: "rgba(255, 159, 64, 1)",
// 	            borderColor: "rgba(255, 159, 64, 1)",
	            
// 	        },
// 	    ],
// 	};
    
    //bedeng manual
    const chartSM_C1R1 = {
	    labels: SM_C1R1Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R1 Manual",
	            data: SM_C1R1Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	const chartSM_C1R2 = {
	    labels: SM_C1R2Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R2 Manual",
	            data: SM_C1R2Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartSM_C1R3 = {
	    labels: SM_C1R3Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R3 Manual",
	            data: SM_C1R3Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartSM_C1R4 = {
	    labels: SM_C1R4Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R4 Manual",
	            data: SM_C1R4Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartSM_C1R5 = {
	    labels: SM_C1R5Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R5 Manual",
	            data: SM_C1R5Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartSM_C1R6 = {
	    labels: SM_C1R6Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R6 Manual",
	            data: SM_C1R6Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	
	//bedeng hujan
	const chartSM_C2R1 = {
	    labels: SM_C2R1Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R1 Hujan",
	            data: SM_C2R1Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	const chartSM_C2R2 = {
	    labels: SM_C2R2Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R2 Manual",
	            data: SM_C2R2Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartSM_C2R3 = {
	    labels: SM_C2R3Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R3 Manual",
	            data: SM_C2R3Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartSM_C2R4 = {
	    labels: SM_C2R4Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R4 Manual",
	            data: SM_C2R4Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartSM_C2R5 = {
	    labels: SM_C2R5Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R5 Manual",
	            data: SM_C2R5Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartSM_C2R6 = {
	    labels: SM_C2R6Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R6 Manual",
	            data: SM_C2R6Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartPH1 = {
	    labels: PH1Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R6 Manual",
	            data: PH1Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartST1 = {
	    labels: ST1Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R6 Manual",
	            data: ST1Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartNPK1 = {
	    labels: NPK1Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R6 Manual",
	            data: NPK1Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartDHT = {
	    labels: DHTChart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R6 Manual",
	            data: DHTChart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	
	
	//bedeng kemarau
	const chartSM_C3R1 = {
	    labels: SM_C3R1Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R1 Hujan",
	            data: SM_C3R1Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	const chartSM_C3R2 = {
	    labels: SM_C3R2Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R2 Manual",
	            data: SM_C3R2Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartSM_C3R3 = {
	    labels: SM_C3R3Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R3 Manual",
	            data: SM_C3R3Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartSM_C3R4 = {
	    labels: SM_C3R4Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R4 Manual",
	            data: SM_C3R4Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartSM_C3R5 = {
	    labels: SM_C3R5Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R5 Manual",
	            data: SM_C3R5Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartSM_C3R6 = {
	    labels: SM_C3R6Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R6 Manual",
	            data: SM_C3R6Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartPH2 = {
	    labels: PH2Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R6 Manual",
	            data: PH2Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartST2 = {
	    labels: ST2Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R6 Manual",
	            data: ST2Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	
	const chartNPK2 = {
	    labels: NPK2Chart.map((item)=> new Date(item.createdAt).toLocaleString()),
	    datasets: [
	        {
	           // label: "R6 Manual",
	            data: NPK2Chart.map((item) => item.anomaly),
	            fill: false,
	            backgroundColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            
	        },
	    ],
	};
	

	
	
	//beda section
	
	const options = {
	    scales: {
	        x: {
	            title: {
	                display: true,
	                text: "Time",
	            },
	        },
	        y: {
	            title:{
	                display: true,
	                text: "Value",
	            },
	            ticks:{
	                stepSize: 1,
	                min: 0,
	                max: 1,
	            },
	        },
	    },
	};


	return (
		<>
			<div className="py-10 pr-20 pl-6 h-screen bg-slate-50 max-md:px-5">
				<div className="flex gap-5 max-md:flex-col max-md:gap-0">
					<aside className="flex flex-col w-[20%]">
						<div className="flex flex-col grow max-md:mt-10">
							<div className="flex gap-2.5 text-2xl font-semibold tracking-wide text-black whitespace-nowrap">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/d598265a0d3ee4cf75971a42cdb5110d29abf4741753f518235fc1b5745025f5?apiKey=d03d160494014eaf8a1af94dd934f586&"
									alt=""
									className="shrink-0 shadow-2xl aspect-[0.88] w-[38px]"
								/>
								<div className="flex-auto self-start mt-3">SmartFarming</div>
							</div>
					 	</div>
					 </aside>

					<main className="flex flex-col max-h-[calc(100vh-10rem)] overflow-y-auto hide-scrollbar ml-5 w-[80%] max-md:ml-0 max-md:w-full">
						<div className="flex flex-col mt-4 max-md:mt-10 max-md:max-w-full">
							<h1 className="text-2xl font-medium text-black max-md:max-w-full">
								Home
							</h1>
							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
								<div className="flex flex-col w-full p-5">
									<div className="flex gap-5 text-sm tracking-normal w-full">
										<div className="flex flex-col gap-3 w-full">
											<h2 className="text-2xl font-semibold tracking-tight text-black">
												Soil Moisture
											</h2>
											<div className="text-teal-500">
												sensor kelembaban tanah
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Baris
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Kemarau
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Hujan
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Manual
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													R1
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.kemaraur1?.value}
													<br />
													{soil?.kemaraur1?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.hujanr1?.value}
													<br />
													{soil?.hujanr1?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.manualr1?.value}
													<br />
													{soil?.manualr1?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													R2
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.kemaraur2?.value}
													<br />
													{soil?.kemaraur2?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.hujanr2?.value}
													<br />
													{soil?.hujanr2?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.manualr2?.value}
													<br />
													{soil?.manualr2?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													R3
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.kemaraur3?.value}
													<br />
													{soil?.kemaraur3?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.hujanr3?.value}
													<br />
													{soil?.hujanr3?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.manualr3?.value}
													<br />
													{soil?.manualr3?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													R4
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.kemaraur4?.value}
													<br />
													{soil?.kemaraur4?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.hujanr4?.value}
													<br />
													{soil?.hujanr4?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.manualr4?.value}
													<br />
													{soil?.manualr4?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													R5
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.kemaraur5?.value}
													<br />
													{soil?.kemaraur5?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.hujanr5?.value}
													<br />
													{soil?.hujanr5?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.manualr5?.value}
													<br />
													{soil?.manualr5?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													R6
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.kemaraur6?.value}
													<br />
													{soil?.kemaraur6?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.hujanr6?.value}
													<br />
													{soil?.hujanr6?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.manualr6?.value}
													<br />
													{soil?.manualr6?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											
										</div>
									</div>
								</div>
							</section>

							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
								<div className="flex flex-col w-full p-5">
									<div className="flex gap-5 text-sm tracking-normal w-full">
										<div className="flex flex-col gap-3 w-full">
											<h2 className="text-2xl font-semibold tracking-tight text-black">
												PH dan Suhu Tanah
											</h2>
											<div className="text-teal-500">
												nilai PH dan suhu pada tanah
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Sensor
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Bedeng
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Nilai
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Status
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													PH
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													Kemarau
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorph2?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													
{/* 													<br /> */}
													{soil?.sensorph2?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}

{/* 													{soil?.sensorph2?.anomaly === 1 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)} */}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													PH
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													Hujan
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorph1?.value}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorph1?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													ST
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													Kemarau
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorst2?.value}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorst2?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													ST
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													Hujan
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorst1?.value}
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorst1?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
												
											</div>
											
										</div>
									</div>
								</div>
							</section>

							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
								<div className="flex flex-col w-full p-5">
									<div className="flex gap-5 text-sm tracking-normal w-full">
										<div className="flex flex-col gap-3 w-full">
											<h2 className="text-2xl font-semibold tracking-tight text-black">
												Sensor NPK
											</h2>
											<div className="text-teal-500">
												Nilai NPK pada tanah
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Bedeng
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													N
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													P
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													K
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Status
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													Kemarau
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorn2?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorp2?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensork2?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													
{/* 													<br /> */}
													{soil?.sensorn2?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium w-full text-center justify-center items-center content-center">
													Hujan
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorn1?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensorp1?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													{soil?.sensork1?.value}
													<br />
												</div>
												<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
													
{/* 													<br /> */}
													{soil?.sensorn1?.value === 0 ? (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
															{"Anomali"}
														</div>
													) : (
														<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
															{"Normal"}
														</div>
													)}
												</div>
											</div>
											
											
										</div>
									</div>
								</div>
							</section>


							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
								<div className="flex flex-col w-full p-5">
									<div className="flex gap-5 text-sm tracking-normal w-full">
										<div className="flex flex-col gap-3 w-full">
											<h2 className="text-2xl font-semibold tracking-tight text-black">
												Log Control Valve 1
											</h2>
											<div className="text-teal-500">
												Status pemberian irigasi bedeng hujan
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Waktu
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Durasi (detik)
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Bukaan (0-225)
												</div>
											</div>
											{dataB.khaliwaktu.map((item, index) => (
												<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
													<div key={index} className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{new Date(item.createdAt).toLocaleDateString()}
															{new Date(item.createdAt).toLocaleTimeString()}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{item.value}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{dataB.khalipersen[index] ? dataB.khalipersen[index].value : "No data"}
															<br />
														</div>
													</div>												
												</div>
											))}
										</div>
									</div>
								</div>
							</section>
							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
								<div className="flex flex-col w-full p-5">
									<div className="flex gap-5 text-sm tracking-normal w-full">
										<div className="flex flex-col gap-3 w-full">
											<h2 className="text-2xl font-semibold tracking-tight text-black">
												Prediksi NPK
											</h2>
											<div className="text-teal-500">
												Nilai prediksi NPK untuh masa kini (Pengganti Sensor NPK)
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Waktu Prediksi
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													N Kemarau
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													P Kemarau
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													K Kemarau
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													N Hujan
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													P Hujan
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													K Hujan
												</div>
											</div>
											{dataB.musan1.map((item, index) => (
												<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
													<div key={index} className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{new Date(item.createdAt).toLocaleDateString()}
															{new Date(item.createdAt).toLocaleTimeString()}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{dataB.musan2[index] ? dataB.musan2[index].value : "No data"}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{dataB.musap2[index] ? dataB.musap2[index].value : "No data"}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{dataB.musak1[index] ? dataB.musak1[index].value : "No data"}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{item.value}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{dataB.musap1[index] ? dataB.musap1[index].value : "No data"}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{dataB.musak1[index] ? dataB.musak1[index].value : "No data"}
															<br />
														</div>
													</div>												
												</div>
											))}
										</div>
									</div>
								</div>
							</section>

							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
								<div className="flex flex-col w-full p-5">
									<div className="flex gap-5 text-sm tracking-normal w-full">
										<div className="flex flex-col gap-3 w-full">
											<h2 className="text-2xl font-semibold tracking-tight text-black">
												Prediksi Nutrisi
											</h2>
											<div className="text-teal-500">
												Nilai kebutuhan NPK untuh masa mendatang 
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													Waktu Prediksi
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													N Kemarau
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													P Kemarau
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													K Kemarau
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													N Hujan
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													P Hujan
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													K Hujan
												</div>
											</div>
											{dataB.irynan1.map((item, index) => (
												<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
													<div key={index} className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{new Date(item.createdAt).toLocaleDateString()}
															{new Date(item.createdAt).toLocaleTimeString()}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{dataB.irynan2[index] ? dataB.irynan2[index].value : "No data"}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{dataB.irynap2[index] ? dataB.irynap2[index].value : "No data"}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{dataB.irynak1[index] ? dataB.irynak1[index].value : "No data"}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{item.value}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{dataB.irynap1[index] ? dataB.irynap1[index].value : "No data"}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{dataB.irynak1[index] ? dataB.irynak1[index].value : "No data"}
															<br />
														</div>
													</div>												
												</div>
											))}
										</div>
									</div>
								</div>
							</section>
							
							<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
							    <div className="flex flex-col w-full p-5">
							        <div className="flex gap-5 text-sm tracking-normal w-full">
							            <div className="flex flex-col gap-3 w-full">
							                <h2 className="text-2xl font-semibold tracking-tight text-black">
							                    Anomali Sensor Bedeng Manual
							                 </h2>
							                 <div className="text-teal-500">Nilai 0 berarti normal dan nilai 1 berarti anomali</div>
							                 
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C1R1} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C1R2} options={options} />
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C1R3} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C1R4} options={options} />
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C1R5} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C1R6} options={options} />
												</div>
											</div>
							             </div>
							         </div>
							     </div>
							 </section>
							 
							 <section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
							    <div className="flex flex-col w-full p-5">
							        <div className="flex gap-5 text-sm tracking-normal w-full">
							            <div className="flex flex-col gap-3 w-full">
							                <h2 className="text-2xl font-semibold tracking-tight text-black">
							                    Anomali Sensor Bedeng Hujan
							                 </h2>
							                 <div className="text-teal-500">Nilai 0 berarti normal dan nilai 1 berarti anomali</div>
							                 
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C2R1} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C2R2} options={options} />
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C2R3} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C2R4} options={options} />
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C2R5} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C2R6} options={options} />
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartST1} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartPH1} options={options} />
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartNPK1} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartDHT} options={options} />
												</div>
											</div>
							             </div>
							         </div>
							     </div>
							 </section>
							 
							 <section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
							    <div className="flex flex-col w-full p-5">
							        <div className="flex gap-5 text-sm tracking-normal w-full">
							            <div className="flex flex-col gap-3 w-full">
							                <h2 className="text-2xl font-semibold tracking-tight text-black">
							                    Anomali Sensor Bedeng Kemarau
							                 </h2>
							                 <div className="text-teal-500">Nilai 0 berarti normal dan nilai 1 berarti anomali</div>
							                 
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C3R1} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C3R2} options={options} />
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C3R3} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C3R4} options={options} />
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C3R5} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartSM_C3R6} options={options} />
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartST2} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartPH2} options={options} />
												</div>
											</div>
											<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartNPK2} options={options} />
												</div>
												<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
													<Line data={chartDHT} options={options} />
												</div>
											</div>
							             </div>
							         </div>
							     </div>
							 </section>
							 
							 
							 
							 
							
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default App;