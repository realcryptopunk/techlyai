const Airtable = require('airtable');


const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY });
const base = airtable.base(process.env.AIRTABLE_BASE_ID || "");
const table = base(process.env.AIRTABLE_TABLE_ID);



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

