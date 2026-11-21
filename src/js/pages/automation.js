export function automation(){return \`
<div class="page-title">Automation Center</div><p class="page-desc">Build repeatable browser-side workflows. Jobs run with your browser's normal permissions and origin rules.</p>
<div class="grid grid-2">
<section class="panel"><h3 class="panel-title">Workflow Builder</h3><label class="muted">Workflow name</label><input id="flowName" class="field" value="Website audit workflow"><label class="muted">Target URL</label><input id="flowUrl" class="field" type="url" placeholder="https://your-authorized-site.example"><label class="muted">Workflow steps</label>
<div id="flowSteps" class="stack">
<label class="check-row"><input type="checkbox" data-step="fetch" checked> Fetch page (GET, no credentials)</label>
<label class="check-row"><input type="checkbox" data-step="metadata" checked> Extract title, description and canonical URL</label>
<label class="check-row"><input type="checkbox" data-step="links" checked> Extract links and same-origin link map</label>
<label class="check-row"><input type="checkbox" data-step="forms"> Inventory forms and field names</label>
<label class="check-row"><input type="checkbox" data-step="resources"> Analyze public resource timing entries (current app only)</label>
<label class="check-row"><input type="checkbox" data-step="headers"> Review response security headers when CORS exposes them</label>
</div>
<div class="toolbar"><button id="flowRun" class="btn btn-primary">Run workflow</button><button id="flowSave" class="btn">Save workflow</button><button id="flowExport" class="btn">Export JSON</button></div>
<div class="toolbar"><label class="muted">Repeat while this tab stays open (minutes)</label><input id="flowInterval" class="field" type="number" min="0" max="1440" value="0" style="width:90px"><button id="flowSchedule" class="btn">Start schedule</button><button id="flowStop" class="btn">Stop</button></div>
</section>
<section class="panel"><h3 class="panel-title">Job Queue & Run Log</h3><div id="flowStatus" class="muted">Idle</div><pre id="flowLog" class="log" style="min-height:300px">No workflow run yet.</pre><div class="toolbar"><button id="flowClear" class="btn">Clear log</button><button id="flowDownload" class="btn">Download results</button></div></section>
<section class="panel"><h3 class="panel-title">Saved Workflows</h3><div id="flowSaved" class="stack"></div><div class="toolbar"><input id="flowImportFile" type="file" accept="application/json,.json" class="field"><button id="flowImport" class="btn">Import JSON</button></div></section>
<section class="panel"><h3 class="panel-title">Automation Capabilities</h3><ul><li>Sequential jobs with timestamps and per-step status</li><li>Reusable workflow definitions in local storage</li><li>JSON import/export and repeat scheduling while the workspace remains open</li><li>Fetch, metadata, links, forms and header analysis</li></ul><div class="notice">This is browser-side automation, not a remote headless browser. Scheduled runs pause when the tab/browser is closed or suspended. No cross-origin, login, CAPTCHA or access-control bypass.</div></section>
</div>\`}
}