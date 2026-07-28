const SPREADSHEET_ID = '1e6mG2Z588-qARxsE4oH7cvuh7J2WGSlQaSjsjq7GMMs';
const SHEET_NAMES = {
  rsvp: 'rsvp',
  wishes: 'wishes',
};

function doPost(e) {
  try {
    const sheetKey = ((e && e.parameter && e.parameter.sheet) || '').toLowerCase();
    const payloadJson = (e && e.parameter && e.parameter.payload) || '{}';

    if (!SHEET_NAMES[sheetKey]) {
      return jsonResponse({ ok: false, error: 'Invalid sheet name. Use rsvp or wishes.' });
    }

    const payload = JSON.parse(payloadJson);
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheetName = SHEET_NAMES[sheetKey];
    
    // Auto-create the sheet if it doesn't exist
    const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);

    // Auto-create headers if the sheet is empty
    ensureHeaders(sheetKey, sheet);
    
    // Append the new response row
    sheet.appendRow(buildRow(sheetKey, payload));

    return jsonResponse({ ok: true, sheet: sheetName });
  } catch (error) {
    return jsonResponse({
      ok: false,
      error: String(error && error.message ? error.message : error),
    });
  }
}

function doGet(e) {
  const action = ((e && e.parameter && e.parameter.action) || '').toLowerCase();

  if (action === 'health') {
    return jsonResponse({ ok: true, service: 'wedding-forms', timestamp: new Date().toISOString() });
  }

  return jsonResponse({ ok: true, message: 'Use POST with sheet=rsvp or sheet=wishes and payload=<json>' });
}

function ensureHeaders(sheetKey, sheet) {
  // If there are already rows, we don't need to add headers
  if (sheet.getLastRow() > 0) {
    return;
  }

  if (sheetKey === 'rsvp') {
    sheet.appendRow(['Timestamp', 'Name', 'Status', 'Submitted At (ISO)']);
    
    // Format the header row to make it bold and add a background color
    const headerRange = sheet.getRange(1, 1, 1, 4);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#f3f3f3");
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 4);
    return;
  }

  if (sheetKey === 'wishes') {
    sheet.appendRow(['Timestamp', 'Name', 'Message', 'Submitted At (ISO)']);
    
    // Format the header row to make it bold and add a background color
    const headerRange = sheet.getRange(1, 1, 1, 4);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#f3f3f3");
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 4);
    return;
  }
}

function buildRow(sheetKey, payload) {
  const now = new Date();

  if (sheetKey === 'rsvp') {
    return [
      now,
      sanitize(payload.name),
      sanitize(payload.status),
      sanitize(payload.submittedAt),
    ];
  }

  if (sheetKey === 'wishes') {
    return [
      now,
      sanitize(payload.name),
      sanitize(payload.message),
      sanitize(payload.submittedAt),
    ];
  }

  return [now, JSON.stringify(payload)];
}

function sanitize(value) {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value).trim();
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
