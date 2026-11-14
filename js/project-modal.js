
// ============================================================
// PROJECT DATA
// Edit your project content here.
// ============================================================

const projects = {
  lotus: {
    title: 'Lotus Retail Sales Performance Dashboard',
    subtitle: 'Retail performance analysis · Power BI dashboard',
    image: 'img/lotus/2022.png',

    overview: 'An interactive Power BI dashboard that tracks retail sales performance through key metrics, monthly trends, store comparisons, and customer behavior.',

    tags: ['Power BI', 'SQL', 'DAX'],

    objective: 'Analyze retail sales performance, track profitability, and understand customer behavior to support data-driven business decisions.',

    features: [
      'Cleaned, validated, and transformed sales data using SQL.',
      'Created KPI cards for completed revenue, gross profit, gross margin, and orders.',
      'Visualized monthly revenue and sales by store.',
      'Compared new and returning customers.',
      'Added an interactive year slicer.',
    ],

    insights: 'Add your verified findings here, such as notable monthly changes, store performance differences, or customer trends.',

    datasetInfo: {
      source: "Kaggle ↗",
      sourceUrl: "https://www.kaggle.com/datasets/abdelrahmanmahmoud22/lotus-group-retail-star-schema-bi",
      rows: "≈12,500",
      tables: "9",
      author: "Abdelrahman Mahmoud"
    },

    gallery: [
      'img/lotus/lotus.png'
    ],

    // ========================================================
    // DASHBOARD BREAKDOWN
    // Edit the descriptions and screenshot paths below.
    // ========================================================

    breakdown: [
      {
        title: 'KPI Cards',
        description: "KPI cards provide a quick overview of the business's overall performance for the selected year. They help viewers understand the results before examining the detailed charts.",
        image: 'img/lotus/KPI Cards.png'
      },
      {
        title: 'Monthly Revenue Trends',
        description: "Line chart shows how revenue changes from month to month. The horizontal axis represents the months, while the vertical axis represents revenue.",
        purpose: [
          "Identifies months with the highest and lowest revenue.",
          "Reveals recurring seasonal patterns or changes in sales.",
          "Helps management plan inventory, staffing, and promotions."
        ],
        image: 'img/lotus/Monthly Revenue Trends.png'
      },
      {
        title: 'Sales by Store',
        description: 'Compare completed revenue across retail store locations.',
        image: 'img/lotus/Sales by Store.png'
      },
      {
        title: 'New and Returning Customer Trends',

        description: 'Multi-series line chart compares the number of newly observed customers with returning customers across months.',

        dataSeries: [
          {
            name: 'New Customers',
            detail: 'Customers whose first recorded completed purchase occurs during the selected period.'
          },
          {
            name: 'Returning Customers',
            detail: 'Customers with a completed purchase during the period whose first recorded completed purchase occurred earlier.'
          }
        ],

        purpose: [
          'Shows whether the business is attracting new customers.',
          'Helps monitor repeat purchasing behavior.',
          'Provides insight into customer acquisition and retention patterns.'
        ],

        image: 'img/lotus/New and Returning Customers.png'
      },
      {
        title: 'Year Slicer',
        description: 'Filter dashboard metrics and charts by reporting year.',
        image: 'img/lotus/Year Slicer.png'
      }
    ],

    // Replace with your actual GitHub repository URL.
    external: 'https://github.com/louiegumera/Lotus-Retail-Sales-Performance',
    live: ''
  },

  // ==========================================================
  // SUPERSTORE PROJECT
  // ==========================================================

  superstore: {
    title: 'Superstore Giant Sales Dashboard',
    subtitle: 'Sales and regional performance · Tableau dashboard',
    image: 'img/superstore.png',

    overview: 'An interactive Tableau dashboard exploring Superstore sales, profit, regional performance, and product categories.',

    tags: ['Tableau'],

    objective: 'Present sales and profitability patterns in an accessible dashboard with regional and product-level comparisons.',

    features: [
      'Sales and profit KPIs.',
      'Monthly sales trend chart.',
      'State-level map and regional comparison chart.',
      'Category, Sub-Category, Shipping Mode, and Order Date filters.'
    ],

    insights: 'Add your verified findings here after reviewing the dashboard, such as which regions or categories performed best.',

    datasetInfo: {
      
    },

    gallery: [
      'img/superstore.png'
    ],

    breakdown: [
      {
        title: 'Sales and Profit KPIs',
        description: 'An overview of key sales and profitability measures.',
        image: 'img/superstore-kpi.png'
      },
      {
        title: 'Sales Trends',
        description: 'Monthly sales performance over time.',
        image: 'img/superstore-trends.png'
      },
      {
        title: 'Regional and Category Analysis',
        description: 'Geographic and product-category comparisons.',
        image: 'img/superstore-regions.png'
      }
    ],

    external: 'Add your verified findings here after reviewing the dashboard, such as which regions or categories performed best.',
    live: 'https://public.tableau.com/app/profile/louie.rey.gumera/viz/SuperstoreGiantSales/Dashboard'
  }
};


// ============================================================
// PROJECT MODAL FUNCTIONALITY
// ============================================================

(() => {

  const modal = document.getElementById('projectModal');

  if (!modal) return;

  const panel = modal.querySelector('.project-modal__panel');
  const scroll = modal.querySelector('.project-modal__scroll');

  const el = id => document.getElementById(id);

  let opener = null;


  // ==========================================================
  // GENERATE LIST ITEMS
  // ==========================================================

  const list = (id, items) => {

    el(id).replaceChildren(
      ...items.map(text => {

        const li = document.createElement('li');

        li.textContent = text;

        return li;

      })
    );

  };


  // ==========================================================
  // DISPLAY MAIN DASHBOARD IMAGE
  // ==========================================================

  const showImage = (src, title) => {

    const image = el('projectModalImage');

    image.src = src;

    image.alt = title + ' dashboard screenshot';

  };


  // ==========================================================
  // OPEN PROJECT MODAL
  // ==========================================================

  function open(key, button) {

    const project = projects[key];

    if (!project) return;

    opener = button;


    // --------------------------------------------------------
    // PROJECT INFORMATION
    // --------------------------------------------------------

    el('projectModalTitle').textContent = project.title;

    el('projectModalOverview').textContent = project.overview;

    el('projectModalObjective').textContent = project.objective;

    
    const datasetContainer = document.getElementById("projectModalDataset");
    const info = project.datasetInfo;

    if (info) {
      datasetContainer.innerHTML = `
        <table class="dataset-table">
          <tbody>
            <tr><th scope="row">Source</th><td></td></tr>
            <tr><th scope="row">Rows</th><td></td></tr>
            <tr><th scope="row">No. of Tables</th><td></td></tr>
            <tr><th scope="row">Author</th><td></td></tr>
          </tbody>
        </table>
      `;

      const cells = datasetContainer.querySelectorAll("td");

      // Make Source clickable
      if (info.sourceUrl) {
        const link = document.createElement("a");
        link.href = info.sourceUrl;
        link.textContent = info.source;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "dataset-source-link";

        cells[0].appendChild(link);
      } else {
        cells[0].textContent = info.source;
      }

      cells[1].textContent = info.rows;
      cells[2].textContent = info.tables;
      cells[3].textContent = info.author;
    } else {
      datasetContainer.textContent = project.dataset || "";
    }


    el('projectModalTools').textContent =
      project.tags.join(' · ');


    // --------------------------------------------------------
    // KEY FEATURES
    // --------------------------------------------------------

    list('projectModalFeatures', project.features);


    // --------------------------------------------------------
    // TECHNOLOGY TAGS
    // --------------------------------------------------------

    el('projectModalTags').replaceChildren(
      ...project.tags.map(tag => {

        const span = document.createElement('span');

        span.textContent = tag;

        return span;

      })
    );


    // --------------------------------------------------------
    // IMAGE GALLERY
    // --------------------------------------------------------

    const gallery = el('projectModalGallery');

    gallery.replaceChildren();

    const images = project.gallery?.length
      ? project.gallery
      : [project.image];

    showImage(images[0], project.title);


    images.forEach((src, index) => {

      const button = document.createElement('button');

      button.type = 'button';

      button.className = index === 0 ? 'active' : '';

      button.setAttribute(
        'aria-label',
        'View screenshot ' + (index + 1)
      );

      const image = document.createElement('img');

      image.src = src;

      image.alt = '';

      button.append(image);


      button.onclick = () => {

        showImage(src, project.title);

        gallery.querySelectorAll('button').forEach(item => {
          item.classList.remove('active');
        });

        button.classList.add('active');

      };

      gallery.append(button);

    });


    // --------------------------------------------------------
    // EXTERNAL PROJECT LINK
    // --------------------------------------------------------

    const external = el('projectModalExternal');

    external.hidden = !project.external;

    if (project.external) {

      external.href = project.external;

    } else {

      external.removeAttribute('href');

    }

    // LIVE PROJECT PREVIEW

    const live = el('projectModalLive');

    live.hidden = !project.live;

    if (project.live) {
      live.href = project.live;
    } else {
      live.removeAttribute('href');
    }


    // ========================================================
    // DASHBOARD BREAKDOWN
    // ========================================================

    const breakdown = el('projectModalBreakdown');

    breakdown.replaceChildren();


    // Dashboard Breakdown heading

    const heading = document.createElement('h3');

    heading.textContent = 'Dashboard Breakdown';

    breakdown.append(heading);


    // Generate individual dashboard components

    (project.breakdown || []).forEach((item, index) => {

      const section = document.createElement('section');

      section.className = 'project-modal__component';


      // Component number

      const label = document.createElement('div');

      label.className = 'project-modal__component-label';

      label.textContent =
        String(index + 1).padStart(2, '0') +
        ' / DASHBOARD COMPONENT';


      // Component title

      const title = document.createElement('h4');

      title.textContent = item.title;

      // COMPONENT DESCRIPTION

      const description = document.createElement('p');
      description.textContent = item.description;

      section.append(label, title, description);


      // DATA SERIES

      if (item.dataSeries?.length) {

        const heading = document.createElement('h5');
        heading.textContent = 'Data Series:';

        const list = document.createElement('ul');
        list.className = 'project-modal__details-list';

        item.dataSeries.forEach(series => {

          const li = document.createElement('li');

          const strong = document.createElement('strong');
          strong.textContent = series.name + ': ';

          li.append(strong, document.createTextNode(series.detail));

          list.append(li);

        });

        section.append(heading, list);
      }


// PURPOSE

if (item.purpose?.length) {

  const heading = document.createElement('h5');
  heading.textContent = 'Purpose:';

  const list = document.createElement('ul');
  list.className = 'project-modal__details-list';

  item.purpose.forEach(text => {

    const li = document.createElement('li');
    li.textContent = text;

    list.append(li);

  });

  section.append(heading, list);
}


      // Component screenshot

      if (item.image) {

        const image = document.createElement('img');

        image.src = item.image;

        image.alt = item.title + ' screenshot';

        image.loading = 'lazy';

        image.onerror = () => {
          image.style.display = 'none';
        };

        section.append(image);

      }

      breakdown.append(section);

    });


    // --------------------------------------------------------
    // SHOW MODAL
    // --------------------------------------------------------

    modal.hidden = false;

    document.body.classList.add('project-modal-open');

    scroll.scrollTop = 0;

    panel.focus();

  }


  // ==========================================================
  // CLOSE PROJECT MODAL
  // ==========================================================

  function close() {

    modal.hidden = true;

    document.body.classList.remove('project-modal-open');

    if (opener?.isConnected) {
      opener.focus();
    }

  }


  // ==========================================================
  // OPEN MODAL WHEN PROJECT BUTTON IS CLICKED
  // ==========================================================

  document.querySelectorAll('[data-open-project]').forEach(button => {

    button.addEventListener('click', () => {

      open(button.dataset.openProject, button);

    });

  });


  // ==========================================================
  // CLOSE MODAL BUTTONS
  // ==========================================================

  modal.querySelectorAll('[data-close-project]').forEach(button => {

    button.addEventListener('click', close);

  });


  // ==========================================================
  // KEYBOARD ACCESSIBILITY
  // ==========================================================

  document.addEventListener('keydown', event => {

    if (modal.hidden) return;


    // Close when Escape is pressed

    if (event.key === 'Escape') {

      event.preventDefault();

      close();

    }


    // Keep keyboard focus inside the modal

    if (event.key !== 'Tab') return;

    const focusable = [
      ...modal.querySelectorAll(
        'button:not([disabled]), a[href]'
      )
    ].filter(element => element.getClientRects().length);


    if (!focusable.length) return;

    const first = focusable[0];

    const last = focusable[focusable.length - 1];


    if (
      event.shiftKey &&
      (
        document.activeElement === first ||
        document.activeElement === panel
      )
    ) {

      event.preventDefault();

      last.focus();

    } else if (
      !event.shiftKey &&
      document.activeElement === last
    ) {

      event.preventDefault();

      first.focus();

    }

  });

})();