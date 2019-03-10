function printResult(rows) {
  console.log('Query Results:');
  rows.forEach(row => {
const adr_ln_1_txt = row['adr_ln_1_txt']; 
const adr_ln_2_txt = row['adr_ln_2_txt'];
const cty_nm = row['cty_nm'];
const st_cd = row['st_cd'];
const zip_cd_txt = row['zip_cd_txt'];
const cntry_cd = row['cntry_cd'];
const adr_ln_1_txt_std = row['adr_ln_1_txt_std'];
const adr_ln_2_txt_std = row['adr_ln_2_txt_std'];
const addr_line_three_std = row['addr_line_three_std'];
const cty_nm_std = row['cty_nm_std'];
const st_cd_std = row['st_cd_std'];
const zip_cd_txt_std = row['zip_cd_txt_std'];
const cntry_cd_std = row['cntry_cd_std'];
const longitude_std = row['longitude_std'];
const lattiude_std = row['lattiude_std'];
const county_std = row['county_std'];
const addr_standard_ind = row['addr_standard_ind'];
const addr_validation_ind = row['addr_validation_ind'];
const qs_flag = row['qs_flag'];
console.log(`Addresses: ${adr_ln_1_txt}, ${adr_ln_2_txt}, ${cty_nm}, ${st_cd}, ${zip_cd_txt}, ${cntry_cd}, ${adr_ln_1_txt_std}, ${adr_ln_2_txt_std}, ${addr_line_three_std}, ${cty_nm_std}, ${st_cd_std}, ${zip_cd_txt_std}, ${cntry_cd_std}, ${longitude_std}, ${lattiude_std}, ${county_std}, ${addr_standard_ind}, ${addr_validation_ind}, ${qs_flag}`);
  });
}

async function queryStackOverflow(projectId) {
  // Imports the Google Cloud client library
  const BigQuery = require('@google-cloud/bigquery');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  const projectId = "hackathons-202611";

  // Creates a client
  const bigquery = new BigQuery({projectId});

  // The SQL query to run
  const sqlQuery = `SELECT
    view_count
    FROM \`hackathons-202611.hackru_optum_address_standardization.OptumAddress\`
    LIMIT 10`;

  // Query options list: https://cloud.google.com/bigquery/docs/reference/v2/jobs/query
  const options = {
    query: sqlQuery,
    useLegacySql: false, // Use standard SQL syntax for queries.
  };

  // Runs the query
  const [rows] = await bigquery.query(options);
  printResult(rows);
}
