/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Retrofit Utility Sensor',
    position: 'Developer',
    url: 'N/A',
    startDate: '2022-09-01',
    summary: 'Worked on a project involving the transmission and reconstruction of image data, image pre-processing, and the design and testing of a bridge PCB. This project allowed me to apply my skills in PCB revision, MicroPython, and C programming.',
    highlights: [
      'Managed transmission and reconstruction of base64-encoded image data over LoRaWAN and UART.',
      'Utilized Tesseract for image pre-processing in OCR algorithms.',
      'Implemented a handshake-based communication model between devices.',
      'Participated in the design and testing of a bridge PCB, integrating image processing and LoRaWAN communication.',
      'Applied technical skills in PCB revision, MicroPython, and C programming throughout the project.',
    ],
  },
  {
    name: 'Phase and Voltage Detector',
    position: 'Developer',
    url: 'N/A',
    startDate: '2020-09-01',
    endDate: '2020-12-01',
    summary: 'Developed a phase and voltage detector using the AT89C51RC2 chip. This project involved programming in C, handling input from a function generator, and displaying output on an LCD.',
    highlights: [
      'Built a phase and voltage detector using the AT89C51RC2 chip.',
      'Developed the detector firmware in C.',
      'Handled input from two voltages generated by a function generator.',
      'Displayed output on an LCD, including voltage and phase difference.',
    ],
  },
  {
    name: 'Coin Pick Robot Including Edge Detection',
    position: 'Developer',
    url: 'N/A',
    startDate: 'N/A',
    summary: 'Worked on a project involving the programming of an MSP430 chip, debugging and edge creation using an oscilloscope and function generator, and circuit assembly on a breadboard. This project also involved the creation of a demo video to showcase the functionality of the robot.',
    highlights: [
      'Programmed an MSP430 chip in C, including pin configuration.',
      'Utilized an oscilloscope and function generator for debugging and edge creation.',
      'Assembled the circuit on a breadboard, including chip/gate placements and wiring.',
      'Created a demo video showcasing the functionality of the robot.',
    ],
  },
  {
    name: 'UBC Sailbot',
    position: 'Developer',
    url: 'N/A',
    startDate: 'N/A',
    summary: 'Participated in a project involving the testing of winch and motors, firmware development for PIC32, and multi-thread testing for the winch system.',
    highlights: [
      'Conducted tests for winch and motors.',
      'Developed firmware for PIC32.',
      'Performed multi-thread tests for the winch system.',
    ],
  },
  {
    name: 'Snake Game based on DE1-SoC Display through VGA',
    position: 'Developer',
    url: 'N/A',
    startDate: '2023-04-01',
    summary: 'Worked on a project involving the implementation of a hardware design on Quartus, the design and integration of a snake game, and the utilization of built-in timer and interrupts on M68K for RTOS. This project allowed me to apply my skills in hardware coding with Verilog and VHDL, and software coding with C.',
    highlights: [
      'Implemented hardware design on Quartus using 80*40 VGA xc3s400-4ft256, making effective use of IP cores like 2-port RAM, ROM, and PLL.',
      'Designed and integrated the snake game, successfully integrating the VGA core into the address space in both hardware and software.',
      'Utilized built-in timer and interrupts on M68K for RTOS, ensuring smooth and responsive gameplay.',
      'Employed hardware coding with Verilog and VHDL, and software coding with C for efficient and optimized performance.',
    ],
  },
  {
    name: 'Design Of a Memory System based on M68K ON FPGA',
    position: 'Developer',
    url: 'N/A',
    startDate: '2023-01-01',
    endDate: '2023-04-01',
    summary: 'Worked on a project involving the design and implementation of various memory controllers, the development of an IIC (I2C), SPI Controller, EEPROM, and ADC system, and the creation of a user monitor program and debugging program. This project also involved the integration of an RTOS and Canbus Network Controller.',
    highlights: [
      'Designed and implemented SRAM, DRAM, SPI Flash, and RAM controllers for efficient memory access and data storage.',
      'Developed an IIC (I2C),SPI Controller, EEPROM, and ADC system to interface with external devices and sensors.',
      'Created a user monitor program and debugging program, enhancing the functionality and usability of the memory system.',
      'Integrated an RTOS and Canbus Network Controller to enable real-time communication and networking capabilities within the M68K system.',
    ],
  },
  {
    name: 'Computer Architecture Based on SPEC2006 Benchmark',
    position: 'Developer',
    url: 'N/A',
    startDate: '2022-09-01',
    endDate: '2022-12-01',
    summary: 'Worked on a project involving the implementation of various cache replacement policies, the employment of branch prediction techniques, and the focus on improving cache efficiency at the algorithmic level.',
    highlights: [
      'Implemented various cache replacement policies, including bip, dip, and pseudo-tree, to optimize cache performance and efficiency.',
      'Employed branch prediction techniques based on correlated saturation counter to enhance the accuracy and speed of branch instructions.',
      'Focused on improving cache efficiency at the algorithmic level, resulting in better overall system performance.',
    ],
  },
];

export default work;
