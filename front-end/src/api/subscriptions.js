/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import request from '@/utils/request'

const BASE_URL_V2 = '/admin/v2'

export function fetchSubscriptions(persistent, tenantNamespaceTopic) {
  return request({
    url: BASE_URL_V2 + `/${persistent}/${tenantNamespaceTopic}/subscriptions`,
    method: 'get'
  })
}

export function putSubscription(tenant, namespace, topic, subscription) {
  return request({
    url: BASE_URL_V2 + `/persistent/${tenant}/${namespace}/${topic}/subscription/${subscription}`,
    method: 'put'
  })
}

export function deleteSubscription(tenant, namespace, topic, subscription) {
  return request({
    url: BASE_URL_V2 + `/persistent/${tenant}/${namespace}/${topic}/subscription/${subscription}`,
    method: 'delete'
  })
}
