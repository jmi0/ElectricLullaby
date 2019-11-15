/**
 * @Author: Joe Iannone <josephiannone>
 * @Date:   2019-11-11T20:38:17-05:00
 * @Filename: notes.js
 * @Last modified by:   josephiannone
 * @Last modified time: 2019-11-14T22:34:00-05:00
 */



const notes = [{frequency: "16.35", sequence_no: "0", letter: "c", sign: ""}, {frequency: "17.32", sequence_no: "0", letter: "c", sign: "#"}, {frequency: "18.35", sequence_no: "0", letter: "d", sign: ""}, {frequency: "19.45", sequence_no: "0", letter: "d", sign: "#"}, {frequency: "20.60", sequence_no: "0", letter: "e", sign: ""}, {frequency: "21.83", sequence_no: "0", letter: "f", sign: ""}, {frequency: "23.12", sequence_no: "0", letter: "f", sign: "#"}, {frequency: "24.50", sequence_no: "0", letter: "g", sign: ""}, {frequency: "25.96", sequence_no: "0", letter: "g", sign: "#"}, {frequency: "27.50", sequence_no: "0", letter: "a", sign: ""}, {frequency: "29.14", sequence_no: "0", letter: "a", sign: "#"}, {frequency: "30.87", sequence_no: "0", letter: "b", sign: ""}, {frequency: "32.70", sequence_no: "1", letter: "c", sign: ""}, {frequency: "34.65", sequence_no: "1", letter: "c", sign: "#"}, {frequency: "36.71", sequence_no: "1", letter: "d", sign: ""}, {frequency: "38.89", sequence_no: "1", letter: "d", sign: "#"}, {frequency: "41.20", sequence_no: "1", letter: "e", sign: ""}, {frequency: "43.65", sequence_no: "1", letter: "f", sign: ""}, {frequency: "46.25", sequence_no: "1", letter: "f", sign: "#"}, {frequency: "49.00", sequence_no: "1", letter: "g", sign: ""}, {frequency: "51.91", sequence_no: "1", letter: "g", sign: "#"}, {frequency: "55.00", sequence_no: "1", letter: "a", sign: ""}, {frequency: "58.27", sequence_no: "1", letter: "a", sign: "#"}, {frequency: "61.74", sequence_no: "1", letter: "b", sign: ""}, {frequency: "65.41", sequence_no: "2", letter: "c", sign: ""}, {frequency: "69.30", sequence_no: "2", letter: "c", sign: "#"}, {frequency: "73.42", sequence_no: "2", letter: "d", sign: ""}, {frequency: "77.78", sequence_no: "2", letter: "d", sign: "#"}, {frequency: "82.41", sequence_no: "2", letter: "e", sign: ""}, {frequency: "87.31", sequence_no: "2", letter: "f", sign: ""}, {frequency: "92.50", sequence_no: "2", letter: "f", sign: "#"}, {frequency: "98.00", sequence_no: "2", letter: "g", sign: ""}, {frequency: "103.83", sequence_no: "2", letter: "g", sign: "#"}, {frequency: "110.00", sequence_no: "2", letter: "a", sign: ""}, {frequency: "116.54", sequence_no: "2", letter: "a", sign: "#"}, {frequency: "123.47", sequence_no: "2", letter: "b", sign: ""}, {frequency: "130.81", sequence_no: "3", letter: "c", sign: ""}, {frequency: "138.59", sequence_no: "3", letter: "c", sign: "#"}, {frequency: "146.83", sequence_no: "3", letter: "d", sign: ""}, {frequency: "155.56", sequence_no: "3", letter: "d", sign: "#"}, {frequency: "164.81", sequence_no: "3", letter: "e", sign: ""}, {frequency: "174.61", sequence_no: "3", letter: "f", sign: ""}, {frequency: "185.00", sequence_no: "3", letter: "f", sign: "#"}, {frequency: "196.00", sequence_no: "3", letter: "g", sign: ""}, {frequency: "207.65", sequence_no: "3", letter: "g", sign: "#"}, {frequency: "220.00", sequence_no: "3", letter: "a", sign: ""}, {frequency: "233.08", sequence_no: "3", letter: "a", sign: "#"}, {frequency: "246.94", sequence_no: "3", letter: "b", sign: ""}, {frequency: "261.63", sequence_no: "4", letter: "c", sign: ""}, {frequency: "277.18", sequence_no: "4", letter: "c", sign: "#"}, {frequency: "293.66", sequence_no: "4", letter: "d", sign: ""}, {frequency: "311.13", sequence_no: "4", letter: "d", sign: "#"}, {frequency: "329.63", sequence_no: "4", letter: "e", sign: ""}, {frequency: "349.23", sequence_no: "4", letter: "f", sign: ""}, {frequency: "369.99", sequence_no: "4", letter: "f", sign: "#"}, {frequency: "392.00", sequence_no: "4", letter: "g", sign: ""}, {frequency: "415.30", sequence_no: "4", letter: "g", sign: "#"}, {frequency: "440.00", sequence_no: "4", letter: "a", sign: ""}, {frequency: "466.16", sequence_no: "4", letter: "a", sign: "#"}, {frequency: "493.88", sequence_no: "4", letter: "b", sign: ""}, {frequency: "523.25", sequence_no: "5", letter: "c", sign: ""}, {frequency: "554.37", sequence_no: "5", letter: "c", sign: "#"}, {frequency: "587.33", sequence_no: "5", letter: "d", sign: ""}, {frequency: "622.25", sequence_no: "5", letter: "d", sign: "#"}, {frequency: "659.25", sequence_no: "5", letter: "e", sign: ""}, {frequency: "698.46", sequence_no: "5", letter: "f", sign: ""}, {frequency: "739.99", sequence_no: "5", letter: "f", sign: "#"}, {frequency: "783.99", sequence_no: "5", letter: "g", sign: ""}, {frequency: "830.61", sequence_no: "5", letter: "g", sign: "#"}, {frequency: "880.00", sequence_no: "5", letter: "a", sign: ""}, {frequency: "932.33", sequence_no: "5", letter: "a", sign: "#"}, {frequency: "987.77", sequence_no: "5", letter: "b", sign: ""}, {frequency: "1046.50", sequence_no: "6", letter: "c", sign: ""}, {frequency: "1108.73", sequence_no: "6", letter: "c", sign: "#"}, {frequency: "1174.66", sequence_no: "6", letter: "d", sign: ""}, {frequency: "1244.51", sequence_no: "6", letter: "d", sign: "#"}, {frequency: "1318.51", sequence_no: "6", letter: "e", sign: ""}, {frequency: "1396.91", sequence_no: "6", letter: "f", sign: ""}, {frequency: "1479.98", sequence_no: "6", letter: "f", sign: "#"}, {frequency: "1567.98", sequence_no: "6", letter: "g", sign: ""}, {frequency: "1661.22", sequence_no: "6", letter: "g", sign: "#"}, {frequency: "1760.00", sequence_no: "6", letter: "a", sign: ""}, {frequency: "1864.66", sequence_no: "6", letter: "a", sign: "#"}, {frequency: "1975.53", sequence_no: "6", letter: "b", sign: ""}, {frequency: "2093.00", sequence_no: "7", letter: "c", sign: ""}, {frequency: "2217.46", sequence_no: "7", letter: "c", sign: "#"}, {frequency: "2349.32", sequence_no: "7", letter: "d", sign: ""}, {frequency: "2489.02", sequence_no: "7", letter: "d", sign: "#"}, {frequency: "2637.02", sequence_no: "7", letter: "e", sign: ""}, {frequency: "2793.83", sequence_no: "7", letter: "f", sign: ""}, {frequency: "2959.96", sequence_no: "7", letter: "f", sign: "#"}, {frequency: "3135.96", sequence_no: "7", letter: "g", sign: ""}, {frequency: "3322.44", sequence_no: "7", letter: "g", sign: "#"}, {frequency: "3520.00", sequence_no: "7", letter: "a", sign: ""}, {frequency: "3729.31", sequence_no: "7", letter: "a", sign: "#"}, {frequency: "3951.07", sequence_no: "7", letter: "b", sign: ""}, {frequency: "4186.01", sequence_no: "8", letter: "c", sign: ""}, {frequency: "4434.92", sequence_no: "8", letter: "c", sign: "#"}, {frequency: "4698.63", sequence_no: "8", letter: "d", sign: ""}, {frequency: "4978.03", sequence_no: "8", letter: "d", sign: "#"}, {frequency: "5274.04", sequence_no: "8", letter: "e", sign: ""}, {frequency: "5587.65", sequence_no: "8", letter: "f", sign: ""}, {frequency: "5919.91", sequence_no: "8", letter: "f", sign: "#"}, {frequency: "6271.93", sequence_no: "8", letter: "g", sign: ""}, {frequency: "6644.88", sequence_no: "8", letter: "g", sign: "#"}, {frequency: "7040.00", sequence_no: "8", letter: "a", sign: ""}, {frequency: "7458.62", sequence_no: "8", letter: "a", sign: "#"}, {frequency: "7902.13", sequence_no: "8", letter: "b", sign: ""}];
