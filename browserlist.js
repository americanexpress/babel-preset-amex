/*
 * Copyright (c) 2019 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

const browserList = [
  'last 2 Chrome versions',
  'last 2 ChromeAndroid versions',
  'last 2 Edge versions',
  'last 2 Firefox versions',
  'last 2 iOS versions',
  'last 2 Safari versions',
];

const legacyBrowserList = ['last 2 versions', 'not dead'];

module.exports = { browserList, legacyBrowserList };
