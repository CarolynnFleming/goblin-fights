// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderZombie } from "../render-utils.js";
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
let zombieData = 
  {name: 'Chad', hp: 2};

    // Set up your arguments and expectations
    const expected = '<div class="zombie"><p>Chad</p><p>🧟‍♂️</p><p>2</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderZombie(zombieData).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, '');
});
