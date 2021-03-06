/*
 * Copyright 2012-2013 eBay Software Foundation and ios-driver committers
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
package org.uiautomation.ios.command;

import javax.json.JsonObject;
import org.json.JSONObject;
import org.openqa.selenium.UnsupportedCommandException;
import org.openqa.selenium.remote.Response;
import org.uiautomation.ios.IOSServerManager;
import org.uiautomation.ios.servlet.WebDriverLikeCommand;
import org.uiautomation.ios.servlet.WebDriverLikeRequest;

public class SetTimeoutHandler extends CommandHandler {
  public SetTimeoutHandler(IOSServerManager driver, WebDriverLikeRequest request) {
    super(driver, request);
  }

  /**
   * type - {string} The type of operation to set the timeout for. Valid values are: "script" for
   * script timeouts, "implicit" for modifying the implicit wait timeout and "page load" for setting
   * a page load timeout.
   */
  @Override
  public Response handle() throws Exception {
    JsonObject payload = getRequest().getPayload();
    String type = payload.getString("type", "");
    final WebDriverLikeCommand command;
    if ("page load".equals(type)) {
      command = WebDriverLikeCommand.URL;
    } else if ("script".equals(type)) {
      command = WebDriverLikeCommand.EXECUTE_SCRIPT;
    } else {
      throw new UnsupportedCommandException("set timeout for " + payload);
    }

    long timeout = payload.getJsonNumber("ms").longValue();
    getSession().configure(command).set(type, timeout);

    Response res = new Response();
    res.setSessionId(getSession().getSessionId());
    res.setStatus(0);
    res.setValue(new JSONObject());
    return res;
  }
}
