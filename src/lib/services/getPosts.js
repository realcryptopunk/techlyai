const Airtable = require('airtable');

const airtable = new Airtable({ apiKey: "pattLbWr55skn4g0Q.2e451ee3a8b8ff7c9b76971bcb81037cd2ef8d3b30d57f54e1f47e422c7c3ce5" });
const base = airtable.base("appRaWp8xH26TGBKc");

const table = base('tbl35aAE6ORC02PfO');

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records) => {
  return records.map(record => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = record => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export default async function getPosts() {
  const records = await table.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}

export async function getAllPosts() {
  const records = await base("Tools").select().all();
  return getMinifiedRecords(records);
}


export async function getPostBySlug(filterFormula) {
  const records = await base("Tools")
    .select({ ...(filterFormula && { filterByFormula: filterFormula }) })
    .all();
  return getMinifiedRecords(records);
}

