

const Scrollspy = () => {


return(
<div class="grid grid-cols-3">
  <div class="col-span-2">
    <div
      data-twe-spy="scroll"
      data-twe-target="#scrollspy1"
      data-twe-offset="0"
      class="relative h-48 overflow-auto">
      <section id="example-1">
        <h3 class="pb-3 pt-5 text-xl font-semibold">Section 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
      </section>
      <section id="example-2">
        <h3 class="pb-3 pt-5 text-xl font-semibold">Section 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
      </section>
      <section id="example-3">
        <h3 class="pb-3 pt-5 text-xl font-semibold">Section 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
        <section id="example-sub-A">
          <h3 class="pb-3 pt-5 text-xl font-semibold">Subsection A</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Labore earum natus vel minima quod error maxime, molestias ut.
            Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati
            et reiciendis quaerat accusamus numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Labore earum natus vel minima quod error maxime, molestias ut.
            Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati
            et reiciendis quaerat accusamus numquam.
          </p>
        </section>
        <section id="example-sub-B">
          <h3 class="pb-3 pt-5 text-xl font-semibold">Subsection B</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Labore earum natus vel minima quod error maxime, molestias ut.
            Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati
            et reiciendis quaerat accusamus numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Labore earum natus vel minima quod error maxime, molestias ut.
            Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati
            et reiciendis quaerat accusamus numquam.
          </p>
        </section>
      </section>
      <section id="example-4">
        <h3 class="pb-3 pt-5 text-xl font-semibold">Section 4</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
      </section>
    </div>
  </div>

  <div>
    <!-- Scrollspy -->
    <div id="scrollspy1" class="sticky-top ps-3 text-sm">
      <ul data-twe-nav-list-ref>
        <li class="py-1">
          <a
            data-twe-nav-link-ref
            data-twe-nav-link-active
            class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
            href="#example-1"
            >Section 1</a
          >
        </li>
        <li class="py-1">
          <a
            data-twe-nav-link-ref
            class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
            href="#example-2"
            >Section 2</a
          >
        </li>
        <li class="py-1">
          <a
            data-twe-nav-link-ref
            class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
            href="#example-3"
            >Section 3</a
          >
          <ul data-twe-nav-list-ref class="ps-3">
            <li class="py-1">
              <a
                data-twe-nav-link-ref
                class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                href="#example-sub-A"
                >Subsection A</a
              >
            </li>
            <li>
              <a
                data-twe-nav-link-ref
                class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                href="#example-sub-B"
                >Subsection B</a
              >
            </li>
          </ul>
        </li>
        <li class="py-1">
          <a
            data-twe-nav-link-ref
            class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
            href="#example-4"
            >Section 4</a
          >
        </li>
      </ul>
    </div>
    <!-- Scrollspy -->
  </div>
</div>
)

};

export default Scrollspy;