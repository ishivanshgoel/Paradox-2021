const removeNoise = ({ offsetParent:{offsetParent}, lastElementChild }, type) => {
        let inputNoise;

        if (type == "input") {
          inputNoise = offsetParent.lastElementChild;
          offsetParent.classList.remove("is-focused");
        } else {
          inputNoise = lastElementChild;
        }

        inputNoise.removeChild(inputNoise.childNodes[0]);
      };

      const createSvg = (config) => {
        let svgGroup = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        svgGroup.setAttribute("x", config.svgGroupX);
        svgGroup.setAttribute("y", config.svgGroupY);

        let rect = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        rect.setAttribute("x", config.rectX);
        rect.setAttribute("y", config.rectY);
        rect.setAttribute("width", config.noiseWidth);
        rect.setAttribute("height", config.noiseHeight);
        rect.setAttribute("class", "noise__el");
        svgGroup.appendChild(rect);

        let rectOnBorder = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        rectOnBorder.setAttribute("x", config.rectBorderX);
        rectOnBorder.setAttribute("y", config.rectBorderY);
        rectOnBorder.setAttribute("width", config.noiseWidth);
        rectOnBorder.setAttribute("height", config.noiseHeight);
        rectOnBorder.setAttribute("fill", "rgb(15, 16, 32)");
        svgGroup.appendChild(rectOnBorder);

        let animate = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "animate"
        );
        animate.setAttribute("attributeType", "CSS");
        animate.setAttribute("attributeName", "opacity");
        animate.setAttribute("id", config.id);
        animate.setAttribute("from", "0");
        animate.setAttribute("to", "1");
        animate.setAttribute("dur", `${Math.random() + 0.1}s`);
        animate.setAttribute("repeatCount", "indefinite");
        animate.setAttribute(
          "begin",
          `${Math.random() + 0.1}s;${config.id}.end+${Math.random() + 0.1}s`
        );
        svgGroup.appendChild(animate);
        return svgGroup;
      };

      const generateNoise = (e, type) => {
        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );

        let input, inputNoise, noiseColor;
        
        if (type == "input") {
          input = e.offsetParent;
          e.parentElement.parentElement.classList.add("is-focused");
          inputNoise = e.parentElement.parentElement.lastElementChild;
          noiseColor = "rgb(112, 113, 156)";
        } else {
          input = e;
          inputNoise = e.lastElementChild;
          noiseColor = "rgb(73, 77, 195)";
        }

        let inputHeight = input.offsetHeight;
        let inputWidth = input.offsetWidth;

        svg.setAttribute("width", "300");
        svg.setAttribute("height", "66");

        let maxNumberOfHorizontalNoise = Math.round(inputWidth / inputHeight);
        let maxNumberOfVerticalNoise = Math.round(inputHeight / 10 / 2);

        let verticalNoiseToGenerateBottom = Math.floor(
          Math.random() * (maxNumberOfHorizontalNoise - 1) + 1
        );

        let commonVerticalConfig = {
          inputWidth,
          noiseHeight: 2,
          rectX: "4",
          rectBorderX: "4",
          rectBorderY: "14",
          noiseColor,
        };

        let commonHorizontalConfig = {
          inputWidth,
          maxNoiseWidth: 8,
          minNoiseWidth: 2,
          noiseWidth: 2,
          rectBorderY: 14,
          noiseColor,
        };

        for (let i = 0; i <= verticalNoiseToGenerateBottom; i++) {
          svg.appendChild(
            createSvg({
              ...commonVerticalConfig,
              noiseWidth: Math.floor(Math.random() * (16 - 4) + 4),
              svgGroupX: Math.floor(Math.random() * (inputWidth - 1) + 1),
              rectY: Math.floor(Math.random() * (16 - 8) + 8),
              svgGroupY: 46,
              id: `bottom${i}`,
            })
          );
        }

        let verticalNoiseToGenerateTop = Math.floor(
          Math.random() * (maxNumberOfHorizontalNoise - 1) + 1
        );

        for (let i = 0; i <= verticalNoiseToGenerateTop; i++) {
          svg.appendChild(
            createSvg({
              ...commonVerticalConfig,
              noiseWidth: Math.floor(Math.random() * (16 - 4) + 4),
              svgGroupX: Math.floor(Math.random() * (inputWidth - 1) + 1),
              rectY: Math.floor(Math.random() * (20 - 8) + 8),
              svgGroupY: 0,
              id: `top${i}`,
            })
          );
        }

        for (let i = 0; i <= maxNumberOfVerticalNoise; i++) {
          svg.appendChild(
            createSvg({
              ...commonHorizontalConfig,
              noiseHeight: Math.floor(Math.random() * (8 - 2) + 2),
              rectX: "2",
              rectY: Math.floor(Math.random() * (20 - 12) + 12),
              svgGroupX: 0,
              svgGroupY: Math.floor(Math.random() * (20 - 1) + 1),
              id: `left${i}`,
              rectBorderX: 0,
            })
          );
        }

        for (let i = 0; i <= maxNumberOfVerticalNoise; i++) {
          svg.appendChild(
            createSvg({
              ...commonHorizontalConfig,
              noiseHeight: Math.floor(Math.random() * (8 - 2) + 2),
              rectX: "0",
              rectY: Math.floor(Math.random() * (20 - 12) + 12),
              svgGroupX: inputWidth - 4,
              svgGroupY: Math.floor(Math.random() * (20 - 5) + 5),
              id: `right${i}`,
              rectBorderX: 2,
            })
          );
        }

        inputNoise.appendChild(svg);
      };