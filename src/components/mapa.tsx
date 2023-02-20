import * as React from "react";
import { SVGProps } from "react";
import { ContainerMap, Box } from "../styles/components/Mapa/style";
import { useEffect, useState } from "react";
import { states } from "@/utils/listStates";

type StateAbbreviation = keyof typeof states;

type PropsColors = {
  DefaultColor?: string;
  RegionHover?: string;
  onSeleted: (value: StateAbbreviation) => void;
};

export const Mapa: React.FC<PropsColors> = ({
  DefaultColor,
  RegionHover,
  onSeleted,
}) => {
  const [openBox, setOpenBox] = useState(false);
  const [selected, setSelected] = useState<StateAbbreviation>();

  useEffect(() => {
    onSeleted(selected ? selected : "AC");
    console.log("alterei:" + selected);
  }, [selected]);

  return (
    <ContainerMap>
      {openBox && <Box></Box>}
      <svg
        width={993}
        height={1000}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M849.868 228.538v62.639h24.143a2.77 2.77 0 0 1 1.962.813l9.173 9.173H896.2c.146 0 .292.012.436.035h2.628l5.919-8.988-11.218-14.349a2.786 2.786 0 0 1-.285-2.973l6.063-11.85v-10.62c.001-.678.25-1.331.7-1.838l6.657-7.526c.243-.275.538-.499.868-.659l25.924-12.552-24.915-23.059-5.081-9.032h-35.5l-12.156-12.156h-21.573v26.6l14.389 14.375a2.77 2.77 0 0 1 .813 1.962"
          fill="pink"
          onClick={() => {
            setSelected("PE");
            setOpenBox(!openBox);
          }}
        />
        <path
          d="M820.962 185.594a2.77 2.77 0 0 1-.735 1.231l-26.437 26.437v70.7a2.779 2.779 0 0 1-2.775 2.774h-44.507L724.544 308.7v54.431l20.67 20.67 26.893-26.893v-21.061a2.778 2.778 0 0 1 2.774-2.775h53.048l16.392-16.392v-86.993l-14.383-14.383a2.755 2.755 0 0 1-.812-1.962v-27.748h-8.164Z"
          fill="#4A34A1"
          onClick={() => {
            setSelected("GO");
            setOpenBox(!openBox);
          }}
        />
        <path
          d="M964.846 232.194H939.38a2.79 2.79 0 0 1-.535 1.112c-.26.325-.59.588-.965.769l-27 13.072-5.592 6.321v6.594h11.988l3.05-2.111a2.76 2.76 0 0 1 1.579-.493h10.42a2.784 2.784 0 0 1 2.117.981 2.765 2.765 0 0 1 .62 2.249l-2.935 17.609h14.1l11.633-11.633a2.77 2.77 0 0 1 1.962-.813h29.5l-10.43-9.987v-13.835l-14.046-9.835Z"
          fill="#2F5F34"
        />
        <path
          d="m717.469 496.553-.033.012-.088.031c-.047.015-.1.028-.153.04-.053.012-.084.022-.113.027-.055.011-.113.019-.17.027l-.1.014c-.082.008-.16.011-.24.012h-.039l-17.306-.038-23.188 26.6h1.732a2.768 2.768 0 0 1 2.172 1.052 2.767 2.767 0 0 1 .528 2.355l-9.049 45.455a2.785 2.785 0 0 1-2.721 2.233H613.31l-15.5 18.241c-.021.024-.053.057-.085.09a2.732 2.732 0 0 1-.14.134.55.55 0 0 1-.043.041l-12.359 10.491.277 10.954 34.151-3.036a2.789 2.789 0 0 1 2.534 1.195l4.042 5.894 44.569-3.382a2.771 2.771 0 0 1 2.775 1.708l14.093 34.14 9.753 2.348a2.772 2.772 0 0 1 2.112 2.429c.037.381-.005.766-.124 1.13l-6.134 18.787 5.885 7.49a2.772 2.772 0 0 1 .357 2.834l-1.687 3.823 13.048 2.521 4.725-6.075a2.748 2.748 0 0 1 1.414-.96l21.261-6.193c19.687-5.565 50.73-14.492 56.956-16.663 1.346-4.762 5.786-20.222 5.831-20.38a2.77 2.77 0 0 1 1.156-1.561l4.844-3.146 3.68-17.173a2.787 2.787 0 0 1 2.871-2.189l11.575.657 9.779-14.668-6.525-21.427a2.778 2.778 0 0 1 .618-2.692l9.064-9.8-10.925-27.412a2.768 2.768 0 0 1 .6-2.979l16.688-16.869-85.938-43.768-40.922 17.6a2.233 2.233 0 0 1-.126.047"
          fill="#F0F"
        />
        <path
          d="M709.76 457.325v-27.423h-73.4a2.798 2.798 0 0 1-1.988-.84l-10.546-10.839h-31.6l-.1 42.292a2.8 2.8 0 0 1-.852 1.994l-25.94 24.942v26.229a2.779 2.779 0 0 1-2.775 2.775h-13.706l-18.555 23.337v12.625l64.779 34.835 14.828-17.457a2.763 2.763 0 0 1 2.115-.978h54.4l7.963-40h-4.45a2.772 2.772 0 0 1-2.746-3.177 2.765 2.765 0 0 1 .655-1.423l28.028-32.15a2.77 2.77 0 0 1 2.091-.951l15.792.035v-20.778l-3.869-12.217a2.74 2.74 0 0 1-.129-.838"
          fill="#000"
        />
        <path
          d="m711.985 364.714-15.686-15.125a2.796 2.796 0 0 1-.848-2v-42.99h-10.8a2.766 2.766 0 0 1-1.905-.757l-11.36-10.728a2.78 2.78 0 0 1-.87-2.017v-61.93h-18.17l-12.6 12.6h5.769a2.774 2.774 0 0 1 1.961.814c.521.52.813 1.225.814 1.961v21.936a2.74 2.74 0 0 1-.21 1.062 2.74 2.74 0 0 1-.603.9l-55.054 55.054v13.451l-.178 75.943H625c.74.002 1.449.298 1.971.822l10.549 10.65h72.241V403.55l-16.834-14.736a2.782 2.782 0 0 1-.175-4l19.233-20.1Z"
          fill="#470000"
        />
        <path
          d="m971.974 299.475-22.338 22.345a2.752 2.752 0 0 1-1.962.812h-16.5a2.779 2.779 0 0 1-2.774-2.775v-22.118h-3.354l-8.682 8.244a2.762 2.762 0 0 1-1.91.763l-13.678-.034h-16.78a2.75 2.75 0 0 1-1.962-.813l-9.173-9.173h-22.994v21.1a2.752 2.752 0 0 1-.812 1.962l-13.257 13.257 33.377-.117 15.6-16a2.801 2.801 0 0 1 1.986-.838h.057a2.78 2.78 0 0 1 2.007.919l20.521 22.823 8.874-9.215a2.785 2.785 0 0 1 2-.85h.07a2.774 2.774 0 0 1 2.023.952l9.061 10.41h36.817c.304 0 .607.051.895.15l21.883-41.808-18.995.004Z"
          fill="#2B69A2"
        />
        <path
          d="m158.487 379.866 32.018-19.223L4.689 287.941 0 303.724l49.132 49.132H88.88v27.01h69.607Z"
          fill="#1A5943"
        />
        <path
          d="m196.318 357.291 6.777-3.677h8.483a2.781 2.781 0 0 1 2.706-2.158h11.924l36.682-40.3a2.778 2.778 0 0 1 2.052-.907h17.52a2.76 2.76 0 0 1 1.945.8l13.5 13.27h20.559c.179-.036.362-.055.545-.055h49.668l31.17-30.568.457-68.662a2.767 2.767 0 0 1 .776-1.906l27.108-28.157-.138-34.6-14.269-.129a2.761 2.761 0 0 1-1.916-.792l-21.758-21.3a2.791 2.791 0 0 1-.834-1.968l-.138-25.842-12.618.234-16.063 16.063a2.761 2.761 0 0 1-1.962.813h-32.406l-14.2 14.2a2.759 2.759 0 0 1-1.92.812l-10.155.153a2.758 2.758 0 0 1-1.947-.8 2.803 2.803 0 0 1-.827-1.977V80.221l-3.84-4.388-7.2.047a2.77 2.77 0 0 1-2.78-2.506h-35.28l-30.591 31.406h-29.922l-22.433-27.735h-38.854l-17.584 43.156 23.629 13.037-.167.489-30.578 89.623-18.643-10.079-63.857 26.181-12.672 43.147 188.979 73.939c.412.161.78.42 1.072.753Z"
          fill="#613535"
        />
        <path
          d="m414.428 537.752 14.091 22.289 20.828-20.828a2.752 2.752 0 0 1 1.962-.812h20.184c.654 0 1.287.231 1.787.652l14.555 12.25h36.921v-12.478c0-.627.212-1.235.6-1.727l19.991-25.143a2.762 2.762 0 0 1 2.172-1.047h12.27v-24.635c.001-.373.076-.743.223-1.086a2.77 2.77 0 0 1 .628-.914l25.94-24.942v-43.528a2.577 2.577 0 0 1-.024-.351v-75.818h-142.73a2.796 2.796 0 0 1-2-.848l-38.911-40.333c-13.6 13.333-30.993 30.451-31.157 30.612a2.758 2.758 0 0 1-1.946.8h-48.025v30.356l14.205 14.326h25.529a2.776 2.776 0 0 1 2.774 2.774v49.616a2.78 2.78 0 0 1-.381 1.4l-15.017 25.608a2.78 2.78 0 0 1-1.777 1.3v52.463h49.482v30.038l17.826.006Z"
          fill="purple"
        />
        <path
          d="m610.483 879.572-9.9-5.707a2.793 2.793 0 0 1-.829-.732 2.782 2.782 0 0 1-.14-3.14l10.492-16.815-21.463-3.942a2.761 2.761 0 0 1-1.751-1.108l-15.791-21.94-61.076-9.867a2.75 2.75 0 0 1-1.414-.679l-43.825 26.656-44.8 56.677 19.329-1.638 22.471 24.2 10.2-3.113 55.142 53.742-.149.381c-1.489 3.818-6.154 15.754-7.04 17.711a105.032 105.032 0 0 0 6.707 9.39l18.443-17.771 6.87-25.762.525-14.01.141-.163 18.3-21.237 6.686-16.714 9.486-.988-2.236 14.157-7.506 7.681-4.7 11.313-.137.1-16.411 12.137-.733 9.232 29.8-23.471 25.309-54.58Z"
          fill="red"
        />
        <path
          d="M331.321 27.361h-68.133l-14.634-8.449h-16l14.821 11.605v23.219H286.6v16.313c.25.057.492.148.717.272l7.114-.047a2.788 2.788 0 0 1 2.106.947l5.363 6.129c.442.506.687 1.155.687 1.827v57.859l6.172-.094 14.22-14.22a2.75 2.75 0 0 1 1.962-.813h32.406l16.042-16.042a2.76 2.76 0 0 1 1.91-.812l13.811-.255-.145-32.633c-.003-.499.13-.99.384-1.419l-24.781-23.374.308-24.348 9.584-10.174L363.019 0l-31.698 27.361Z"
          fill="#3D0037"
        />
        <path
          d="m452.91 61.929-11.363 10.843h-47.031l.155 34.74.147 27.493 20.132 19.706 15.89.143a2.788 2.788 0 0 1 2.75 2.763l.153 38.459a2.764 2.764 0 0 1-.776 1.935l-27.118 28.161-.445 66.865 39.6 41.048h141.869v-11.74a2.74 2.74 0 0 1 .21-1.062 2.74 2.74 0 0 1 .603-.9l55.054-55.054v-18.018h-9.693a2.773 2.773 0 0 1-1.962-4.736l55.528-55.53v-7.057a2.74 2.74 0 0 1 .21-1.062 2.74 2.74 0 0 1 .603-.9l15.507-15.506 1.3-1.251v-15.382h-21.417l-17.734-17.734-45.765 46.08-37.566-37.25-16.722 16.406-17.305-16.644 18.019-17.148-43.229-44.152h-12.406a2.78 2.78 0 0 1-2.775-2.775V61.929H452.91Z"
          fill="#766F31"
        />
        <path
          d="m626.391 123.374-11.49-10.176-27.307 22.945 33.146 28.272 35.274-34.295-7.22-6.913-22.403.167Z"
          fill="#644E00"
        />
        <path
          d="m730.587 140.689-22.958 22.028v1.812a2.74 2.74 0 0 1-.21 1.062 2.74 2.74 0 0 1-.603.9l-14.653 14.653v7.057a2.758 2.758 0 0 1-.813 1.962l-33.454 33.455h15.399a2.779 2.779 0 0 1 2.774 2.775v63.509l9.692 9.153h12.469a2.778 2.778 0 0 1 2.775 2.775v44.588l15.807 15.243h2.186v-54.1a2.76 2.76 0 0 1 .813-1.962L743.4 282.01a2.748 2.748 0 0 1 1.962-.813h42.885v-69.084a2.752 2.752 0 0 1 .812-1.962l24.7-24.7h-25.092l-10.855-10.854H747.06v-17.439l-16.473-16.469Z"
          fill="#00FFC2"
        />
        <path
          d="M512.884 61.929v7.972h10.8a2.784 2.784 0 0 1 1.982.834l44.036 44.972 34.158-34.752-.3-7.7-26.2-26.52-.316-27.142-7.274-7.275-48.984 49.612-7.902-.001Z"
          fill="#B3C3FF"
        />
        <path
          d="m807.076 697.166 2.247-13.283 24.176-9.833-2.213-12.478 3.189-6.873-24.807-12.577-3.599 2.335c-2.3 8-5.712 19.925-5.873 20.553a3.346 3.346 0 0 1-2.4 2.249c-.475.179-1.13.406-2 .692-1.555.51-3.817 1.214-6.722 2.092-4.863 1.47-11.638 3.463-20.141 5.922a5738.6 5738.6 0 0 1-26.415 7.561l6.899 20.872 57.659-7.232Z"
          fill="brown"
        />
        <path
          d="m662.21 749.953 37.644-24.966 23.591-2.847 1.216-7.5 20.267-8.739-6.874-20.8-17.794 5.184-5.219 6.709a2.812 2.812 0 0 1-2.717 1.021l-18.136-3.5a2.77 2.77 0 0 1-2.247-2.631 2.778 2.778 0 0 1 .235-1.213l2.419-5.483-5.772-7.346a2.764 2.764 0 0 1-.456-2.575l5.662-17.341-8.208-1.976a2.778 2.778 0 0 1-1.915-1.639l-13.865-33.587-44.157 3.351a2.777 2.777 0 0 1-2.5-1.2L619.355 617l-34.231 3.043L538 684.216l71.087 8.113a2.767 2.767 0 0 1 2.27 1.747l17.552 44.878 14.7 2.232a2.763 2.763 0 0 1 2.289 2.128l.639 2.813 14.351 3.128c.497.107.954.349 1.321.7"
          fill="green"
        />
        <path
          d="M912.856 399.614a2.761 2.761 0 0 1-.957-.8l-12.625-16.834a2.783 2.783 0 0 1-.107-3.177l7.744-11.913-.388-21.893-19.841-22.066-14.345 14.712a2.78 2.78 0 0 1-1.987.838h-40.393a2.753 2.753 0 0 1-.881.145h-51.423v19.44a2.768 2.768 0 0 1-.813 1.962l-29.667 29.667a2.779 2.779 0 0 1-1.962.813 2.778 2.778 0 0 1-1.961-.813l-22.487-22.487h-3.48l-18.519 19.348 15.492 13.555a2.785 2.785 0 0 1 .948 2.088v54.981l3.961 11.9c.094.283.143.579.143.877v19.775l38.213-16.432a2.804 2.804 0 0 1 2.356.077l90.48 46.082a2.77 2.77 0 0 1 1.48 2.031 2.77 2.77 0 0 1-.767 2.393l-18.081 18.278 10.5 26.339 22.46 10.669v-25.29l15.361-15.993.21-82.439-6.461-7.968.253-.378 15.138-22.6 15.835 1.042 6.571-25.929Z"
          fill="#73A5E6"
        />
        <path
          d="m868.933 603.373-2.6-18.081a2.778 2.778 0 0 1-.965-.259l-23.408-11.119-7.787 8.415 6.443 21.158c.121.392.152.807.092 1.212a2.743 2.743 0 0 1-.437 1.135l-11.388 17.082a2.76 2.76 0 0 1-2.466 1.231l-10.789-.612-2.975 13.882 24.319 12.33 23.133-42.189 8.828-4.185Z"
          fill="#AB8383"
        />
        <path
          d="M992.501 271.4h-31.519l-11.634 11.633a2.748 2.748 0 0 1-1.962.813h-18.524a2.78 2.78 0 0 1-2.118-.981 2.783 2.783 0 0 1-.619-2.25l2.935-17.609h-6.278l-3.05 2.112a2.76 2.76 0 0 1-1.579.493h-13.488l-5.232 10.226 11.355 14.523a2.775 2.775 0 0 1 .131 3.235l-5.005 7.6h7.437l8.681-8.244a2.76 2.76 0 0 1 1.91-.763h7.236a2.776 2.776 0 0 1 2.775 2.775v22.115h12.574l22.342-22.342a2.768 2.768 0 0 1 1.962-.813h21.67V271.4Z"
          fill="#774E4E"
        />
        <path
          d="M964.085 346.683H930.11a2.776 2.776 0 0 1-2.093-.953l-7.9-9.077-6.956 7.223 24 24.1 26.924-21.293Z"
          fill="#6AA45B"
        />
        <path
          d="m918.224 384.157 14.629-12.623c-1.711-1.666-7.179-7-12.522-12.277a957.28 957.28 0 0 1-8.15-8.133l.293 16.513a2.77 2.77 0 0 1-.448 1.561l-7.15 11 9.94 13.253 3.408-9.294Z"
          fill="#999"
        />
        <path
          d="m580.581 599.994 10.268-8.717-64.017-34.426h-40.011a2.775 2.775 0 0 1-1.787-.652l-14.555-12.25h-18.022l-20.9 20.9a2.75 2.75 0 0 1-.886.594l2.381 13.531-18.663 31.36 5.414 6.029.039.139 6.287 22.452-.005.1c-.172 3.412-1.6 31.709-1.883 35.858 3.133.79 25.117 3.314 39.785 4.888l.457.049 7.8 42.214 24.546 5.909 5.626-17.128a2.79 2.79 0 0 1 1.795-1.778l6.723-2.139 1.2-10.355a2.754 2.754 0 0 1 1.305-2.046l16.674-10.227 49.815-67.837-.362-14.288a2.759 2.759 0 0 1 .978-2.185"
          fill="#FF0"
        />
        <path
          d="m613.842 875.125 23.491-20.158 7.323-16.179-4.667-37.167 2.4-17.4-10.812-.914-10.6 4.892a2.773 2.773 0 0 1-3.068-.5l-5.231-4.94-28.488 4.879-4.268 10.365a2.79 2.79 0 0 1-.884 1.151l-3.639 2.773a2.812 2.812 0 0 1-2.5.444l-21.584-6.684-33.753-3.769-5.683 19.081 61.243 9.894a2.766 2.766 0 0 1 1.809 1.118l15.811 21.969 24.376 4.477a2.781 2.781 0 0 1 2.039 1.609 2.765 2.765 0 0 1-.186 2.591l-11.13 17.838 7.735 4.458c.092.053.181.111.266.174"
          fill="#00F"
        />
        <path
          d="M643.613 751.883a2.784 2.784 0 0 1-2.115-2.1l-.612-2.69-14.411-2.189a2.788 2.788 0 0 1-2.167-1.732l-17.527-44.814-73.23-8.358-15.172 9.306-1.25 10.8a2.776 2.776 0 0 1-1.915 2.324l-7.079 2.253-5.306 16.153a2.77 2.77 0 0 1-2.481 1.907c-1.813 10.683-5.646 33.242-6.348 37.152.382.037 1.117.076 2.517.076 4.766 0 13.3-.437 13.383-.441l.425-.022 7.75 17.67a2.666 2.666 0 0 1 .83-.034l34.139 3.813c.173.02.344.055.511.107l20.471 6.336 1.9-1.452 4.566-11.089a2.755 2.755 0 0 1 2.1-1.678l31.366-5.372a2.776 2.776 0 0 1 1.271.081 2.78 2.78 0 0 1 1.103.637l4.874 4.6 9.561-4.413c.438-.202.92-.286 1.4-.246l12.139 1.026 2.217-8.737-3.052-5.15 8.535-2.412 5.863-8.208-14.256-3.104Z"
          fill="#0FF"
        />
        <path
          d="m257.041 409.722 67.1 25.516 20.434 15.114 14.174-24.172v-46.088h-23.912a2.792 2.792 0 0 1-1.97-.821l-15.824-15.958a2.754 2.754 0 0 1-.8-1.954v-31.5h-19.469a2.76 2.76 0 0 1-1.945-.8l-13.5-13.269h-15.161l-36.682 40.3a2.775 2.775 0 0 1-2.052.907H214.9v38.831l28.013 28.013 14.128-14.119Z"
          fill="#FF4E4E"
        />
      </svg>
    </ContainerMap>
  );
};
