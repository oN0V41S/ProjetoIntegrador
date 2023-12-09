export default function Unidade ({id, titulo, srcIcon, srcSkills, info}){
    return(
        <div
        id={id}
        class="rounded-2xl w-10/12 md:w-[70vh] h-max m-auto md: bg-[#DB8A98]"
      >
        <div class="bg-[#CA546A] rounded-xl">
          <div
            id="titulo"
            class="bg-[#C0334D] w-full min-h-[20vh] flex justify-between rounded-xl"
          >
            <h1 class="capitalize text-3xl p-4 text-start h-max self-center rounded-xl">
              {titulo}
            </h1>
            <img
              src={srcIcon}
              alt=""
              class="w-[28px] md:w-[65px] h-[28px] md:h-[65px] self-end m-4"
            />
          </div>
          <div id="info" class="w-full pt-5 min-h-[28vh] pb-5">
            <p class="text-sm p-5">
              {info}
            </p>
          </div>
        </div>
        <div id="skills" class="p-2 z-1">
          <h1 class="w-max m-auto text-xl">Skills</h1>
          <div class="flex justify-around p-5">
            <img
              src={srcSkills}
              class="w-[380px]"
              alt=""
            />
          </div>
        </div>
      </div>
    )
}