const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

async function animateAlice() {
    try {
        await alice1.animate(aliceTumbling, aliceTiming).finished;
        console.log("Alice 1 animation finished");

        await alice2.animate(aliceTumbling, aliceTiming).finished;
        console.log("Alice 2 animation finished");

        await alice3.animate(aliceTumbling, aliceTiming).finished;
        console.log("Alice 3 animation finished");
    } catch(err) {
        console.log(`Error when animating: ${err.message}`);
    }


}

  //
  // alice1
  //   .animate(aliceTumbling, aliceTiming)
  //   .finished
  //   .then((res) => {
  //       console.log(res);
  //       alice2
  //           .animate(aliceTumbling, aliceTiming)
  //           .finished
  //           .then((res) => {
  //               console.log(res);
  //               alice3.animate(aliceTumbling, aliceTiming);
  //           })
  //   });

  // Promise chain  
  // alice1.animate(aliceTumbling, aliceTiming).finished  
  //   .then(() => {
  //       return alice2
  //               .animate(aliceTumbling, aliceTiming)
  //               .finished;     
  //   })
  //   .then(() => {
  //     return alice3
  //             .animate(aliceTumbling, aliceTiming)
  //             .finished;
  //   })
  //   .catch((err) => alert(`Error when promising ... ${err.message}`));